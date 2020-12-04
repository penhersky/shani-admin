import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  EmailField,
  EditButton,
  DeleteButton,
  ShowButton,
} from 'react-admin';

import { DateField } from '../../components';
import { allowed } from '../../accessLevels';

const UserList = (props) => {
  const lower = String(props.resource).toLowerCase();
  return (
    <List {...props} title={`${props.resource}s`}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='name' />
        <EmailField source='email' />
        <BooleanField source='active' />
        <DateField source='createdAt' />
        <ShowButton basePath={`/${lower}`} />

        <EditButton basePath={`/${lower}`} disabled={allowed()} />
        <DeleteButton basePath={`/${lower}`} disabled={allowed()} />
      </Datagrid>
    </List>
  );
};

export default UserList;
