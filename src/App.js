import React from 'react';
import { Admin, Resource } from 'react-admin';

import graphQLProvider from './buildGraphQLProvider';
import authProvider from './authProvider';

import { Dashboard, NotFound } from './pages';

import { Login, Layout } from './layout';

import admin from './admin';
import users from './users';

import theme from './theme';

function App() {
  return (
    <Admin
      dataProvider={graphQLProvider}
      authProvider={authProvider}
      dashboard={Dashboard}
      catchAll={NotFound}
      loginPage={Login}
      layout={Layout}
      theme={theme}
    >
      <Resource name='users' {...admin} />
      <Resource name='admins' {...users} />
    </Admin>
  );
}

export default App;
