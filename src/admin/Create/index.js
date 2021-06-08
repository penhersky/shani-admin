import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  PasswordInput,
  SelectInput,
} from 'react-admin';

import { getPositions } from '../../accessLevels';

const CreateAdmin = (props) => {
  return (
    <Create title='Create Admin' {...props}>
      <SimpleForm>
        <TextInput source='name' required />
        <TextInput source='email' required />
        <PasswordInput source='password' required />
        <TextInput source='imageUrl' />
        <SelectInput source='state' choices={getPositions()} />
      </SimpleForm>
    </Create>
  );
};

export default CreateAdmin;
