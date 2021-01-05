import { ApolloClient, InMemoryCache } from '@apollo/client';
import { account, user, main } from './dataProviders';

const accountClient = new ApolloClient({
  uri: `${process.env.REACT_APP_ACCOUNT_SERVER_URL}/graphql`,
  cache: new InMemoryCache(),
  headers: {
    'x-admin-security-token-x': localStorage.getItem('token'),
  },
});

const serviceClient = new ApolloClient({
  uri: `${process.env.REACT_APP_MAIN_SERVER_URL}/graphql`,
  cache: new InMemoryCache(),
  headers: {
    'x-service-security-token-x': localStorage.getItem('service_token'),
  },
});

const providersList = [
  {
    dataProvider: account,
    client: accountClient,
    resources: [
      'Admin',
      'Profile',
      'Contact',
      'AccountType',
      'Security',
      'Location',
      'Settings',
      'Image',
    ],
  },
  {
    dataProvider: user,
    client: accountClient,
    resources: ['Performer', 'Customer'],
  },
  {
    dataProvider: main,
    client: serviceClient,
    resources: ['Category'],
  },
];

const buildQuery = (setClient) => (introspectionResults) => (
  raFetchType,
  resourceName,
  params,
) => {
  console.log('params', raFetchType, resourceName, params);
  const provider = providersList.find((p) =>
    p.resources.includes(resourceName),
  );
  const lowName = String(resourceName).toLowerCase();

  setClient(provider.client);

  return provider.dataProvider(raFetchType, resourceName, params, lowName);
};

export default buildQuery;
