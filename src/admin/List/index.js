import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ImageField,
  EmailField,
  // EditButton,
  // DeleteButton,
} from 'react-admin';

const adminList = (props) => {
  return (
    <List {...props} title='admins'>
      <Datagrid>
        <TextField source='id' />
        <TextField source='name' />
        <EmailField source='email' />
        <TextField source='state' />
        <ImageField source='imageUrl' />
        <TextField source='updatedAt' />
        <TextField source='createdAt' />
        {/* <EditButton basePath='/users' />
        <DeleteButton basePath='/users' /> */}
      </Datagrid>
    </List>
  );
};

export default adminList;
