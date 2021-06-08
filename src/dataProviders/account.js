import { get, omit } from 'lodash';
import {
  GET_LIST,
  GET_ONE,
  DELETE,
  DELETE_MANY,
  CREATE,
  UPDATE,
} from 'react-admin';
import gql from 'graphql-tag';

import * as fragments from '../gqlFragments';

const buildQuery = (raFetchType, resourceName, params, lowName) => {
  switch (raFetchType) {
    case GET_ONE:
      return {
        query: gql`query get${resourceName}($id: ID!) {
                    get${resourceName}(id: $id) {
                        ${get(fragments, resourceName).large}
                    }
                  }`,
        variables: { id: params?.id },
        parseResponse: (response) => {
          return {
            data: response?.data[`get${resourceName}`],
          };
        },
      };

    case GET_LIST:
      return {
        query: gql`query get${resourceName}s ($paginate: Paginate!) {
                    get${resourceName}s(paginate: $paginate) {
                      result
                      totalItems
                      page
                      limit
                      totalPages
                      ${String(resourceName).toLocaleLowerCase()}s {
                        ${get(fragments, resourceName).short}
                      }
                    }
                  }`,
        variables: {
          paginate: {
            page: params.pagination.page,
            limit: params.pagination.perPage,
            sort: params.sort.order,
            sortKey: params.sort.field,
          },
        },
        parseResponse: (response) => {
          return {
            data: response?.data[`get${resourceName}s`][`${lowName}s`],
            total: response?.data[`get${resourceName}s`]?.totalItems,
            page: response?.data[`get${resourceName}s`]?.page,
          };
        },
      };

    case CREATE:
      return {
        query: gql`mutation add${resourceName}($${lowName}: Create${resourceName}!) {
                    add${resourceName}(${lowName}: $${lowName}) {
                      ${get(fragments, resourceName).large}
                    }
                  }`,
        variables: { [lowName]: params?.data },
        parseResponse: (response) => {
          return {
            data: response?.data[`add${resourceName}`],
          };
        },
      };
    case UPDATE:
      return {
        query: gql`mutation update${resourceName}($id: ID!, $${lowName}: Update${resourceName}!) {
                    update${resourceName}(id: $id, ${lowName}: $${lowName}) {
                      ${get(fragments, resourceName).large}
                    }
                  }`,
        variables: {
          id: params?.id,
          [lowName]: {
            ...omit(params?.data, [
              'updatedAt',
              'createdAt',
              'profile',
              '__typename',
              'user',
              'id',
              'location',
              'contacts',
            ]),
          },
        },
        parseResponse: (response) => {
          return {
            data: response?.data[`update${resourceName}`],
          };
        },
      };

    case DELETE:
      return {
        query: gql`mutation delete${resourceName}s($idArr: [ID!]!) {
                    delete${resourceName}s(idArr: $idArr) {
                      result
                    }
                  }`,
        variables: { idArr: [params?.id] },
        parseResponse: (response) => {
          return {
            data: response?.data[`delete${resourceName}s`]?.result,
          };
        },
      };

    case DELETE_MANY:
      return {
        query: gql`mutation delete${resourceName}s($idArr: [ID!]!) {
                    delete${resourceName}s(idArr: $idArr) {
                      result
                    }
                  }`,
        variables: { idArr: params?.ids },
        parseResponse: (response) => {
          return {
            data: response?.data[`delete${resourceName}s`]?.result,
          };
        },
      };

    default:
      return gql``;
  }
};

export default buildQuery;
