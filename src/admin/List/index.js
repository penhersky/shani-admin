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
        <EditButton basePath='/admin' />
        <DeleteButton basePath='/admin' />
      </Datagrid>
    </List>
  );
};

export default adminList;
