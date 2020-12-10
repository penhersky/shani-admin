import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  ArrayInput,
  SimpleFormIterator,
  SaveButton,
  Toolbar,
} from 'react-admin';

const EditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);

const EditAdmin = (props) => {
  return (
    <Edit title='Edit Profile' {...props}>
      <SimpleForm toolbar={<EditToolbar />}>
        <TextInput source='firstName' />
        <TextInput source='lastName' />
        <TextInput source='middleName' />
        <TextInput source='description' />
        <DateInput source='birthday' />
        <ArrayInput source='categoriesId'>
          <SimpleFormIterator>
            <TextInput placeholder='category id' required />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
};

export default EditAdmin;
