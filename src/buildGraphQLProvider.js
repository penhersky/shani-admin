import { GET_LIST, DELETE } from 'react-admin';
import gql from 'graphql-tag';

const buildQuery = (introspectionResults) => (
  raFetchType,
  resourceName,
  params,
) => {
  console.log('params', raFetchType, resourceName, params);
  switch (raFetchType) {
    case GET_LIST:
      return {
        query: gql`query get${resourceName}s {
                    get${resourceName}s {
                      count
                      ${String(resourceName).toLocaleLowerCase()}s {
                        id
                        name
                        email
                        imageUrl
                        state
                        createdAt
                        updatedAt
                      }
                    }
                  }`,
        parseResponse: (response) => {
          return {
            data:
              response?.data[`get${resourceName}s`][
                `${String(resourceName).toLocaleLowerCase()}s`
              ],
            total: response?.data[`get${resourceName}s`]?.count,
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

    default:
      return gql``;
  }
};

export default buildQuery;
