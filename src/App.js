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
    return <Loading />;
  }
  return (
    <Admin
      dataProvider={provider}
      authProvider={authProvider}
      i18nProvider={i18nProvider}
      dashboard={Dashboard}
      loginPage={Login}
      layout={Layout}
      theme={theme}
    >
      {/* user */}
      <Resource name='Customer' {...Customer} />
      <Resource name='Performer' {...Performer} />
      <Resource name='Image' {...Images} />
      <Resource name='Contact' {...Contacts} />
      <Resource name='AccountType' {...AccountType} />
      <Resource name='Security' {...Security} />
      <Resource name='Location' {...Location} />
      {/* admin */}
      <Resource name='Admin' {...admin} />
    </Admin>
  );
};

export default App;
