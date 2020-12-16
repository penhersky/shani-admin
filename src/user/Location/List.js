import React from 'react';
import { List, Datagrid, TextField, EditButton } from 'react-admin';

const LocationList = (props) => {
  return (
    <List {...props} title='Locations'>
      <Datagrid rowClick='show'>
        <TextField source='id' />
        <TextField source='profile.user.name' label='User' />
        <TextField source='name' />
        <TextField source='lat' />
        <TextField source='lng' />

        <EditButton basePath='/location' />
      </Datagrid>
    </List>
  );
};

export default LocationList;
