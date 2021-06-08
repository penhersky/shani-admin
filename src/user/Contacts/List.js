import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  DeleteButton,
} from 'react-admin';

const ContactsList = (props) => {
  return (
    <List {...props} title='Contacts'>
      <Datagrid rowClick='edit'>
        <TextField source='id' />
        <TextField source='profile.user.name' label='User' />
        <TextField source='name' />
        <TextField source='value' />
        <BooleanField source='show' />
        <DeleteButton basePath='/delete' />
      </Datagrid>
    </List>
  );
};

export default ContactsList;
