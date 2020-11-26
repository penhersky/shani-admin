import * as React from 'react';
import {
  TopToolbar,
  EditButton,
  DeleteButton,
  RefreshButton,
  ListButton,
} from 'react-admin';

import { Security } from '../components';

const Actions = ({ basePath, data, resource }) => (
  <TopToolbar>
    <RefreshButton basePath={basePath} record={data} />
    <ListButton basePath={basePath} record={data} />
    <Security>
      <EditButton basePath={basePath} record={data} />
      <DeleteButton basePath={basePath} record={data} />
    </Security>
  </TopToolbar>
);

export default Actions;
