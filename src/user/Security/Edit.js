import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  PasswordInput,
  Labeled,
  TextField,
  SaveButton,
  Toolbar,
} from 'react-admin';

import { DateField, RefField } from '../../components';

const EditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);

const EditContact = (props) => {
  return (
    <Edit title='Edit Security' {...props}>
      <SimpleForm toolbar={<EditToolbar />}>
        <TextField source='id' />
        <RefField rootKey='type' source='user' label='User' content='name' />
        <TextField source='user.provider' label='provider' />
        <TextInput source='refreshToken' />
        <TextInput source='accessToken' />
        <PasswordInput source='password' />
        <Labeled label='createdAt'>
          <DateField source='createdAt' />
        </Labeled>
        <Labeled label='updatedAt'>
          <DateField source='updatedAt' />
        </Labeled>
      </SimpleForm>
    </Edit>
  );
};

export default EditContact;
