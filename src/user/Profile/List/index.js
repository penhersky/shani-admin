import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
  ShowButton,
} from 'react-admin';

import { DateField } from '../../../components';

const ProfileList = (props) => {
  return (
    <List {...props} title='Profile'>
      <Datagrid>
        <TextField source='id' />
        <TextField source='user.name' title='user' />
        <EmailField source='firstName' />
        <EmailField source='lastName' />
        <EmailField source='middleName' />
        <DateField source='createdAt' />
        <ShowButton basePath='/profile' />

        <EditButton basePath='/profile' />
        <DeleteButton basePath='/profile' />
      </Datagrid>
    </List>
  );
};

export default ProfileList;
