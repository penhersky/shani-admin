import React from 'react';
import {
  Edit,
  SimpleForm,
  BooleanInput,
  SelectInput,
  TextInput,
  Toolbar,
  SaveButton,
  DateInput,
  ArrayInput,
  SimpleFormIterator,
} from 'react-admin';

const EditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);

const EditUser = (props) => {
  return (
    <Edit title='Edit User' {...props}>
      <SimpleForm toolbar={<EditToolbar />}>
        <SelectInput
          source='user.type'
          label='type'
          required
          choices={[
            { id: 'customer', name: 'customer' },
            { id: 'performer', name: 'performer' },
          ]}
        />
        <TextInput source='user.email' required label='email' />
        <TextInput source='user.name' required label='name' />
        <TextInput source='user.provider' required label='provider' />
        <TextInput source='user.firstName' label='firstName' />
        <TextInput source='user.lastName' label='lastName' />
        <TextInput source='user.middleName' label='middleName' />
        <TextInput source='user.description' label='description' spellCheck />
        <DateInput source='user.birthday' label='birthday' />
        <ArrayInput source='user.categoriesId' label='categoriesId'>
          <SimpleFormIterator>
            <TextInput placeholder='category id' label='id' required />
          </SimpleFormIterator>
        </ArrayInput>
        <BooleanInput source='user.active' label='active' />
      </SimpleForm>
    </Edit>
  );
};

export default EditUser;
