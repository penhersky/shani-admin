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

import * as fragments from '../gqlFragments/main';

const buildQuery = (raFetchType, resourceName, params, lowName) => {
  switch (raFetchType) {
    case GET_ONE:
      return {
        query: gql`query _get${resourceName}($id: ID!) {
                    _get${resourceName}(id: $id) {
                        ${get(fragments, resourceName).large}
                    }
                  }`,
        variables: { id: params?.id },
        parseResponse: (response) => {
          return {
            data: response?.data[`_get${resourceName}`],
          };
        },
      };

    case GET_LIST:
      return {
        query: gql`query _get${resourceName}s ($paginate: Paginate!) {
                    _get${resourceName}s(paginate: $paginate) {
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
            data: response?.data[`_get${resourceName}s`][`${lowName}s`],
            total: response?.data[`_get${resourceName}s`]?.totalItems,
            page: response?.data[`_get${resourceName}s`]?.page,
          };
        },
      };

    case CREATE:
      return {
        query: gql`mutation _add${resourceName}($${lowName}: Create${resourceName}!) {
                    _add${resourceName}(${lowName}: $${lowName}) {
                      ${get(fragments, resourceName).large}
                    }
                  }`,
        variables: { [lowName]: params?.data },
        parseResponse: (response) => {
          return {
            data: response?.data[`_add${resourceName}`],
          };
        },
      };
    case UPDATE:
      return {
        query: gql`mutation _update${resourceName}($id: ID!, $${lowName}: Update${resourceName}!) {
                    _update${resourceName}(id: $id, ${lowName}: $${lowName}) {
                      ${get(fragments, resourceName).large}
                    }
                  }`,
        variables: {
          id: params?.id,
          [lowName]: {
            ...omit(params?.data, [
              'updatedAt',
              'createdAt',
              '__typename',
              'user',
              'customer',
              'performer',
              'id',
            ]),
          },
        },
        parseResponse: (response) => {
          return {
            data: response?.data[`_update${resourceName}`],
          };
        },
      };

    case DELETE:
      return {
        query: gql`mutation _delete${resourceName}s($idArr: [ID!]!) {
                    _delete${resourceName}s(idArr: $idArr) {
                      result
                    }
                  }`,
        variables: { idArr: [params?.id] },
        parseResponse: (response) => {
          return {
            data: response?.data[`_delete${resourceName}s`]?.result,
          };
        },
      };

    case DELETE_MANY:
      return {
        query: gql`mutation _delete${resourceName}s($idArr: [ID!]!) {
                    _delete${resourceName}s(idArr: $idArr) {
                      result
                    }
                  }`,
        variables: { idArr: params?.ids },
        parseResponse: (response) => {
          return {
            data: response?.data[`_delete${resourceName}s`]?.result,
          };
        },
      };

    default:
      return gql``;
  }
};

export default buildQuery;
