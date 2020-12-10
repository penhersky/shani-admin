import * as React from 'react';
import {
  Show,
  SimpleShowLayout,
  TextField,
  Labeled,
  ArrayField,
  SingleFieldList,
} from 'react-admin';

import { DateField, RefField, SimpleRefField } from '../../../components';
import { ActionWithoutDelete } from '../../../layout/Action';

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
    <Show {...props} actions={<ActionWithoutDelete />} title={<PostTitle />}>
      <SimpleShowLayout>
        <TextField source='id' />
        <RefField source='user' label='User' rootKey='type' content='name' />

        <TextField source='firstName' />
        <TextField source='lastName' />
        <TextField source='middleName' />
        <RefField
          source='location'
          label='Location'
          root='location'
          content='name'
        />

        <TextField source='description' />
        <Labeled label='birthday'>
          <DateField source='birthday' />
        </Labeled>
        {/* <ArrayField>
          <ReferenceField
            label='Category'
            source='categoriesId'
            reference='Category'
          >
            <TextField source='name' />
          </ReferenceField>
        </ArrayField> */}

        <ArrayField source='contacts'>
          <SingleFieldList>
            <SimpleRefField source='name' root='contact' />
          </SingleFieldList>
        </ArrayField>
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
