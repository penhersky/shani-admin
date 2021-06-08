import { account, user, main } from './dataProviders';

const providersList = [
  {
    dataProvider: account,
    client: 'account',
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
    client: 'account',
    resources: ['Performer', 'Customer'],
  },
  {
    dataProvider: main,
    client: 'main',
    resources: ['Category'],
  },
];

const buildQuery = (introspectionResults) => (
  raFetchType,
  resourceName,
  params,
) => {
  console.log('params', raFetchType, resourceName, params);
  const provider = providersList.find((p) =>
    p.resources.includes(resourceName),
  );
  const lowName = String(resourceName).toLowerCase();

  return provider.dataProvider(raFetchType, resourceName, params, lowName);
};

export default buildQuery;
