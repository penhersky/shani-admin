import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

const SecurityList = (props) => {
  return (
    <List {...props} title='Security'>
      <Datagrid rowClick='edit'>
        <TextField source='id' />
        <TextField source='user.name' label='User' />
        <TextField source='user.provider' label='Provider' />
        <TextField source='refreshToken' />
        <TextField source='accessToken' />
      </Datagrid>
    </List>
  );
};

export default SecurityList;
