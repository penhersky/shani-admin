import React from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { Admin, Resource } from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import englishMessages from 'ra-language-english';

import buildQuery from './buildGraphQLProvider';
import authProvider from './authProvider';
import buildGraphQLProvider from 'ra-data-graphql';

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

function App() {
  return (
    <Admin
      dataProvider={buildGraphQLProvider({
        buildQuery,
        client: new ApolloClient({
          uri: `${process.env.REACT_APP_ACCOUNT_SERVER_URL}/graphql`,
          cache: new InMemoryCache(),
          headers: {
            'x-admin-security-token-x': localStorage.getItem('token'),
          },
        }),
      })}
      authProvider={authProvider}
      i18nProvider={i18nProvider}
      dashboard={Dashboard}
      catchAll={NotFound}
      loginPage={Login}
      layout={Layout}
      theme={theme}
      locale='en'
    >
      <Resource name='customer' {...customer} />
      <Resource name='performer' {...performer} />
      <Resource name='admins' {...admin} />
    </Admin>
  );
}

export default App;
