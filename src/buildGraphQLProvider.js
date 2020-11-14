import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import buildGraphQLProvider from 'ra-data-graphql-simple';

const dataProvider = buildGraphQLProvider({
  clientOptions: {
    link: createHttpLink({
      uri: String(process.env.REACT_APP_ACCOUNT_SERVER_URL),
    }),
    cache: new InMemoryCache(),
  },
});

export default dataProvider;
