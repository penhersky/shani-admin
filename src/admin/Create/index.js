import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  PasswordInput,
  SelectInput,
} from 'react-admin';

const CreateAdmin = (props) => {
  const user = JSON.parse(localStorage.getItem('permissions'));
  return (
    <Create title='Create Admin' {...props}>
      <SimpleForm>
        <TextInput source='name' required />
        <TextInput source='email' required />
        <PasswordInput source='password' required />
        <TextInput source='imageUrl' />
        <SelectInput
          source='state'
          choices={[
            (user?.name === 'root' || user?.state === 'root') && {
              id: 'root',
              name: 'root',
            },
            (user?.name === 'root' || user?.state === 'moderator') && {
              id: 'moderator',
              name: 'moderator',
            },
            {
              id: 'junior',
              name: 'junior',
            },
          ]}
        />
      </SimpleForm>
    </Create>
  );
};

export default CreateAdmin;
