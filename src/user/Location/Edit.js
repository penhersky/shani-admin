import React from 'react';
import { Edit, SimpleForm, TextInput, Toolbar, SaveButton } from 'react-admin';

const EditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);

const EditLocation = (props) => {
  return (
    <Edit title='Edit Location' {...props}>
      <SimpleForm toolbar={<EditToolbar />}>
        <TextInput source='name' />
        <TextInput source='lat' />
        <TextInput source='lng' />
      </SimpleForm>
    </Edit>
  );
};

export default EditLocation;
