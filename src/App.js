import React from 'react';
import { Admin, Resource } from 'react-admin';
import { Grade, People } from '@material-ui/icons';

import graphQLProvider from './buildGraphQLProvider';
import authProvider from './authProvider';

import { Menu } from './components';
import { Dashboard, NotFound } from './pages';

import theme from './theme';

function App() {
  return (
    <Admin
      dataProvider={graphQLProvider}
      authProvider={authProvider}
      dashboard={Dashboard}
      catchAll={NotFound}
      theme={theme}
      menu={Menu}
    >
      <Resource name='users' icon={People} />
      <Resource name='admins' icon={Grade} />
    </Admin>
  );
}

export default App;
