import React from 'react';
import { List, Datagrid, TextField, EditButton, ShowButton } from 'react-admin';

import { DateField } from '../../../components';

const ProfileList = (props) => {
  return (
    <List {...props} title='Profile'>
      <Datagrid>
        <TextField source='id' />
        <TextField source='user.name' label='User' />
        <TextField source='firstName' />
        <TextField source='lastName' />
        <TextField source='middleName' />
        <DateField source='createdAt' />
        <ShowButton basePath='/profile' />

        <EditButton basePath='/profile' />
      </Datagrid>
    </List>
  );
};

export default ProfileList;
