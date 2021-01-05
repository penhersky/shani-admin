import React from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { Admin, Resource } from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import englishMessages from 'ra-language-english';
import buildGraphQLProvider from 'ra-data-graphql';

import buildQuery from './buildGraphQLProvider';
import authProvider from './authProvider';

import { Dashboard } from './pages';
import { Loading } from './components';

import { Login, Layout } from './layout';

import admin from './admin';
import {
  Contacts,
  AccountType,
  Customer,
  Location,
  Performer,
  Security,
  Images,
} from './user';
import { Category } from './main';
import show from './user/modules/Show';

import theme from './theme';

const messages = {
  en: englishMessages,
};
const i18nProvider = polyglotI18nProvider((locale) => messages[locale]);

const App = () => {
  const [provider, setProvider] = React.useState();
  // const [main, setMain] = React.useState();

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

  // React.useEffect(() => {
  //   if (!main) {
  //     buildGraphQLProvider({
  //       buildQuery,
  //       client: new ApolloClient({
  //         uri: `${process.env.REACT_APP_MAIN_SERVER_URL}/graphql`,
  //         cache: new InMemoryCache(),
  //         headers: {
  //           'x-service-security-token-x': localStorage.getItem('service_token'),
  //         },
  //       }),
  //     }).then((newProvider) => setMain(() => newProvider));
  //   }
  // }, [main]);

  if (!provider) {
    return <Loading />;
  }
  return (
    <>
      <Admin
        dataProvider={provider}
        authProvider={authProvider}
        i18nProvider={i18nProvider}
        dashboard={Dashboard}
        loginPage={Login}
        layout={Layout}
        theme={theme}
      >
        {/* main */}
        <Resource name='Category' {...Category} />
        {/* user */}
        <Resource name='Performer' {...Performer} show={show} />
        <Resource name='Customer' {...Customer} />
        <Resource name='Image' {...Images} />
        <Resource name='Contact' {...Contacts} />
        <Resource name='AccountType' {...AccountType} />
        <Resource name='Security' {...Security} />
        <Resource name='Location' {...Location} />
        {/* admin */}
        <Resource name='Admin' {...admin} />
      </Admin>
    </>
  );
};

export default App;
