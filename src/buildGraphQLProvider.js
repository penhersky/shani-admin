import { get } from 'lodash';
import { GET_LIST, GET_ONE, DELETE, DELETE_MANY, CREATE } from 'react-admin';
import gql from 'graphql-tag';

import * as fragments from './gqlFragments';

const buildQuery = (introspectionResults) => (
  raFetchType,
  resourceName,
  params,
) => {
  console.log('params', raFetchType, resourceName, params);
  const lowName = String(resourceName).toLowerCase();
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
        query: gql`query get${resourceName}s {
                    get${resourceName}s {
                      count
                      ${String(resourceName).toLocaleLowerCase()}s {
                        ${get(fragments, resourceName).short}
                      }
                    }
                  }`,
        parseResponse: (response) => {
          return {
            data: response?.data[`get${resourceName}s`][`${lowName}s`],
            total: response?.data[`get${resourceName}s`]?.count,
          };
        },
      };

    case CREATE:
      return {
        query: gql`mutation add${resourceName}($${lowName}: Create${resourceName}) {
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
