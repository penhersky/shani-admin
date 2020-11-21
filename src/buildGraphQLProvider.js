import buildApolloClient, {
  buildQuery as buildQueryFactory,
} from 'ra-data-graphql-simple';
import { DELETE } from 'react-admin';
import gql from 'graphql-tag';

const getGqlResource = (resource) => {
  switch (resource) {
    case 'admins':
      return 'Admin';

    default:
      throw new Error(`Unknown resource ${resource}`);
  }
};

const customBuildQuery = (introspectionResults) => {
  const buildQuery = buildQueryFactory(introspectionResults);

  return (type, resource, params) => {
    if (type === DELETE) {
      return {
        query: gql`mutation remove${resource}($id: ID!) {
                    remove${resource}(id: $id)
                }`,
        variables: { id: params.id },
        parseResponse: ({ data }) => {
          if (data[`remove${resource}`]) {
            return { data: { id: params.id } };
          }

          throw new Error(`Could not delete ${resource}`);
        },
      };
    }

    return buildQuery(type, resource, params);
  };
};

const Provider = () => {
  return buildApolloClient({
    clientOptions: {
      uri: `${process.env.REACT_APP_ACCOUNT_SERVER_URL}/graphql`,
    },
    introspection: {
      operationNames: {
        [DELETE]: (resource) => `remove${resource.name}`,
      },
    },
    buildQuery: customBuildQuery,
  }).then((dataProvider) => (...rest) => {
    const [type, resource, params] = rest;
    return dataProvider(type, getGqlResource(resource), params);
  });
};

export default Provider;
