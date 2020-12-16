import * as React from 'react';
import {
  Show,
  SimpleShowLayout,
  TextField,
  Labeled,
  NumberField,
} from 'react-admin';

import { DateField, LongRef, Map } from '../../components';
import { ActionWithoutDelete } from '../../layout/Action';

const PostTitle = ({ record }) => <span>Location</span>;

const ShowLocation = (props) => (
  <Show {...props} actions={<ActionWithoutDelete />} title={<PostTitle />}>
    <SimpleShowLayout>
      <TextField source='id' />
      <LongRef
        source='user'
        rootSource='profile'
        label='User'
        rootKey='type'
        content='name'
      />
      <TextField source='name' />

      <NumberField source='lat' />
      <NumberField source='lng' />

      <Map source='location' />

      <Labeled label='updatedAt'>
        <DateField source='updatedAt' />
      </Labeled>
      <Labeled label='createdAt'>
        <DateField source='createdAt' />
      </Labeled>
    </SimpleShowLayout>
  </Show>
);

export default ShowLocation;
