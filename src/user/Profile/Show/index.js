import * as React from 'react';
import { Show, SimpleShowLayout, TextField, Labeled } from 'react-admin';

import { DateField, RefField } from '../../../components';
import { Action } from '../../../layout';

const PostTitle = ({ record }) => (
  <span>
    {record
      ? `Profile "${record.firstName ? record.firstName : record.user.name} ${
          record.lastName ? record?.lastName : ''
        }"`
      : ''}
  </span>
);

const ProfileShow = (props) => {
  return (
    <Show {...props} actions={<Action />} title={<PostTitle />}>
      <SimpleShowLayout>
        <TextField source='id' />
        <RefField source='user' label='User' root='type' content='name' />

        <TextField source='firstName' />
        <TextField source='lastName' />
        <TextField source='middleName' />
        <Labeled label='location'>
          <TextField source='location.id' />
        </Labeled>
        <TextField source='description' />
        <Labeled label='birthday'>
          <DateField source='birthday' />
        </Labeled>
        {/* <TextField source='categoriesId' /> */}
        {/* <TextField source='contacts' /> */}
        <Labeled label='updatedAt'>
          <DateField source='updatedAt' />
        </Labeled>
        <Labeled label='createdAt'>
          <DateField source='createdAt' />
        </Labeled>
      </SimpleShowLayout>
    </Show>
  );
};

export default ProfileShow;
