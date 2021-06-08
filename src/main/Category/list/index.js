import React from 'react';
import { List, Datagrid, TextField, ImageField } from 'react-admin';

import { DateField } from '../../../components';

const CategoryList = (props) => {
  return (
    <List {...props} title='Category'>
      <Datagrid rowClick='edit'>
        <TextField source='id' />
        <TextField source='name' />
        <ImageField source='image' />
        <DateField source='createdAt' />
        <DateField source='updatedAt' />
      </Datagrid>
    </List>
  );
};

export default CategoryList;
