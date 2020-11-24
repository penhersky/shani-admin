import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ImageField,
  EmailField,
  DateField,
  ChipField,
  EditButton,
  DeleteButton,
} from 'react-admin';

const adminList = (props) => {
  return (
    <List {...props} title='admins'>
      <Datagrid>
        <TextField source='id' />
        <TextField source='name' />
        <EmailField source='email' />
        <ChipField source='state' />
        <ImageField source='imageUrl' />
        <DateField source='updatedAt' />
        <DateField source='createdAt' />
        <EditButton basePath='/admin' />
        <DeleteButton basePath='/admin' />
      </Datagrid>
    </List>
  );
};

export default adminList;
