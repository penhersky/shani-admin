import React from 'react';
import {
  Edit,
  SimpleForm,
  BooleanInput,
  SelectInput,
  TextInput,
  Toolbar,
  SaveButton,
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
        <BooleanInput source='user.active' label='active' />
      </SimpleForm>
    </Edit>
  );
};

export default EditUser;
