import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const EditLocation = (props) => {
  return (
    <Edit title='Edit Location' {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput source='lat' />
        <TextInput source='lng' />
      </SimpleForm>
    </Edit>
  );
};

export default EditLocation;
