import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  Labeled,
  ImageField,
} from 'react-admin';

import { DateField, RefField } from '../../components';

const EditImage = (props) => {
  return (
    <Edit title='Edit Image' {...props}>
      <SimpleForm>
        <RefField source='user' label='User' rootKey='type' content='name' />
        <ImageField source='Location' label='' />
        <TextInput source='Location' label='url' />
        <TextInput source='Key' />
        <TextInput source='Etag' />
        <BooleanInput source='active' />
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

export default EditImage;
