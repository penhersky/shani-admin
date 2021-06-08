import React from 'react';
import {
  Edit,
  SimpleForm,
  DateInput,
  SelectInput,
  Labeled,
  Toolbar,
  SaveButton,
} from 'react-admin';

import { DateField } from '../../components';

const EditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);

const EditAccount = (props) => {
  return (
    <Edit title='Edit Contact' {...props} t>
      <SimpleForm toolbar={<EditToolbar />}>
        <SelectInput
          source='status'
          required
          choices={[
            { id: 'default', name: 'default' },
            { id: 'ban', name: 'ban' },
          ]}
        />
        <DateInput source='from' required />
        <DateInput source='to' />
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

export default EditAccount;
