import * as React from 'react';
import {
  TopToolbar,
  EditButton,
  DeleteButton,
  RefreshButton,
  ListButton,
} from 'react-admin';

const Actions = ({ basePath, data, resource }) => (
  <TopToolbar>
    <RefreshButton basePath={basePath} record={data} />
    <ListButton basePath={basePath} record={data} />
    <EditButton basePath={basePath} record={data} />
    <DeleteButton basePath={basePath} record={data} />
  </TopToolbar>
);

export default Actions;
