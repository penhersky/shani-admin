import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ChipField,
  EmailField,
  EditButton,
  DeleteButton,
  ShowButton,
} from 'react-admin';

import { DateField } from '../../components';
import { allowed } from '../../accessLevels';

const adminList = (props) => {
  return (
    <List {...props} title='admins'>
      <Datagrid>
        <TextField source='id' />
        <TextField source='name' />
        <EmailField source='email' />
        <ChipField source='state' />
        <DateField source='createdAt' />
        <ShowButton basePath='/admin' />

        <EditButton basePath='/admin' disabled={allowed()} />
        <DeleteButton basePath='/admin' disabled={allowed()} />
      </Datagrid>
    </List>
  );
};

export default adminList;
