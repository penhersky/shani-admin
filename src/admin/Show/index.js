import * as React from 'react';
import {
  Show,
  SimpleShowLayout,
  TextField,
  ChipField,
  EmailField,
  ImageField,
  Labeled,
} from 'react-admin';

import { DateField } from '../../components';
import { Action } from '../../layout';

const PostTitle = ({ record }) => (
  <span>{record ? `Admin "${record.name}"` : ''}</span>
);

const AdminShow = (props) => (
  <Show {...props} actions={<Action />} title={<PostTitle />}>
    <SimpleShowLayout>
      <TextField source='id' />
      <TextField source='name' />
      <EmailField source='email' />
      <ImageField source='imageUrl' label='image' />
      <ChipField source='state' />
      <Labeled label='updatedAt'>
        <DateField source='updatedAt' />
      </Labeled>
      <Labeled label='createdAt'>
        <DateField source='createdAt' />
      </Labeled>
    </SimpleShowLayout>
  </Show>
);

export default AdminShow;
