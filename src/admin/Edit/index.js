import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  PasswordInput,
  SelectInput,
} from 'react-admin';

import { getPositions } from '../../accessLevels';

const EditAdmin = (props) => {
  return (
    <Edit title='Edit Admin' {...props}>
      <SimpleForm>
        <TextInput source='name' required />
        <TextInput source='email' required />
        <PasswordInput source='password' required />
        <TextInput source='imageUrl' />
        <SelectInput source='state' choices={getPositions()} />
      </SimpleForm>
    </Edit>
  );
};

export default EditAdmin;
