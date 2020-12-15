import React from 'react';
import { List, Datagrid, TextField, EditButton } from 'react-admin';

import { DateField } from '../../../components';

const ProfileList = (props) => {
  return (
    <List {...props} title='Profile'>
      <Datagrid rowClick='show'>
        <TextField source='id' />
        <TextField source='user.name' label='User' />
        <TextField source='firstName' />
        <TextField source='lastName' />
        <TextField source='middleName' />
        <DateField source='createdAt' />

        <EditButton basePath='/profile' />
      </Datagrid>
    </List>
  );
};

export default ProfileList;
