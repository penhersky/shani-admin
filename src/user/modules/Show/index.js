import * as React from 'react';
import { Show, SimpleShowLayout } from 'react-admin';

import { makeStyles } from '@material-ui/core/styles';

import { ActionWithoutDelete } from '../../../layout/Action';

import AccountList from './AccountList';
import User from './User';
import ImageList from './ImageList';
import Description from './Description';
import Info from './Info';

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const UserTitle = ({ record }) => (
  <span>{record.user ? record.user.name : ''}</span>
);
const ShowUser = (props) => {
  const classes = useStyles(props);
  return (
    <Show {...props} title={<UserTitle />} actions={<ActionWithoutDelete />}>
      <SimpleShowLayout className={classes.content}>
        <AccountList />
        <User source='user' />
        <ImageList />
        <Description />
        <Info />
      </SimpleShowLayout>
    </Show>
  );
};

export default ShowUser;
