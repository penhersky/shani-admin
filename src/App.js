import React from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { Admin, Resource } from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import englishMessages from 'ra-language-english';
import buildGraphQLProvider from 'ra-data-graphql';

import buildQuery from './buildGraphQLProvider';
import authProvider from './authProvider';

import { Dashboard, NotFound } from './pages';

import { Login, Layout } from './layout';

import admin from './admin';
import customer from './customer';
import performer from './performer';

import theme from './theme';

const messages = {
  en: englishMessages,
};
const i18nProvider = polyglotI18nProvider((locale) => messages[locale]);

const App = () => {
  const [provider, setProvider] = React.useState();
  React.useEffect(() => {
    if (!provider) {
      buildGraphQLProvider({
        buildQuery,
        client: new ApolloClient({
          uri: `${process.env.REACT_APP_ACCOUNT_SERVER_URL}/graphql`,
          cache: new InMemoryCache(),
          headers: {
            'x-admin-security-token-x': localStorage.getItem('token'),
          },
        }),
      }).then((newProvider) => setProvider(() => newProvider));
    }
  }, [provider]);
  if (!provider) {
    return <div>Loading...</div>;
  }
  return (
    <Admin
      dataProvider={provider}
      authProvider={authProvider}
      i18nProvider={i18nProvider}
      dashboard={Dashboard}
      catchAll={NotFound}
      loginPage={Login}
      layout={Layout}
      theme={theme}
    >
      <Resource name='Customer' {...customer} />
      <Resource name='Performer' {...performer} />
      <Resource name='Admin' {...admin} />
    </Admin>
  );
};

export default App;
