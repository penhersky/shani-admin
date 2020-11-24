import { GET_LIST } from 'react-admin';
import gql from 'graphql-tag';

const buildQuery = (introspectionResults) => (
  raFetchType,
  resourceName,
  params,
) => {
  const resource = introspectionResults.resources.find(
    (r) => r.type.name === resourceName,
  );
  console.log('resource', resource);
  console.log('query', introspectionResults);
  console.log('c', raFetchType, resource, params);
  switch (raFetchType) {
    case GET_LIST:
      return {
        query: gql`query get${resource} {
                      count
                      admins {
                        id
                        name
                        email
                        imageUrl
                        state
                        createdAt
                        updatedAt
                      }
                  }`,
        parseResponse: (response) => console.log(response),
      };

    default:
      return gql``;
  }
};

export default buildQuery;
