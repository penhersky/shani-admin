import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

import { DateField } from '../../components';

const ContactsList = (props) => {
  return (
    <List {...props} title='Contacts'>
      <Datagrid rowClick='edit'>
        <TextField source='id' />
        <TextField source='user.name' label='User' />
        <TextField source='status' />
        <DateField source='from' />
        <DateField source='to' />
      </Datagrid>
    </List>
  );
};

export default ContactsList;
