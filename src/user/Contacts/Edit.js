import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  Labeled,
} from 'react-admin';

import { DateField } from '../../components';

const EditContact = (props) => {
  return (
    <Edit title='Edit Contact' {...props}>
      <SimpleForm>
        <TextInput source='name' required />
        <TextInput source='value' />
        <TextInput source='icon' />
        <BooleanInput source='show' />
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
