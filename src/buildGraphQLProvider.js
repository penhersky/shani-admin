import { account, user } from './dataProviders';

const providersList = [
  {
    dataProvider: account,
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
    resources: ['Performer', 'Customer'],
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
