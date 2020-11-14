import React from 'react';
import { Admin, Resource } from 'react-admin';

import graphQLProvider from './buildGraphQLProvider';

import { List } from './users';

function App() {
  return (
    <Admin dataProvider={graphQLProvider}>
      <Resource name='users' list={List} />
    </Admin>
  );
}

export default App;
