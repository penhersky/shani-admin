import * as React from 'react';
import { Link } from 'react-admin';
import { Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import {
  Profile as p,
  AccountType as a,
  Contacts as c,
  Images as i,
  Location as l,
  Security as s,
} from '../../../user';

const useStyles = makeStyles((theme) => ({
  list: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    margin: '0 8px',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width: 170,
    textTransform: 'uppercase',
    border: 'solid 1px white',
    margin: 3,
    color: 'white',
    transition: 'liner 0.5s',
    borderRadius: 5,
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.306)',
    },
  },
}));

const List = (props) => {
  const { user, security } = props.record;
  const classes = useStyles(props);

  if (!user?.active) return null;

  return (
    <div className={classes.list}>
      <Link className={classes.item} to={`/Profile/${user?.profile?.id}/show`}>
        <p.icon />
        <Typography>profile</Typography>
      </Link>
      <Link className={classes.item} to={`/image/`}>
        <i.icon />
        <Typography>images</Typography>
      </Link>
      <Link className={classes.item} to={`/contact/`}>
        <c.icon />
        <Typography>contacts</Typography>
      </Link>
      <Link
        className={classes.item}
        to={`/accountType/${user?.accountType?.id}/show`}
      >
        <a.icon />
        <Typography>Account Type</Typography>
      </Link>
      <Link className={classes.item} to={`/security/${security?.id}/show`}>
        <s.icon />
        <Typography>security</Typography>
      </Link>
      <Link
        className={classes.item}
        to={`/location/${user?.profile?.location?.id}/show`}
      >
        <l.icon />
        <Typography>Location</Typography>
      </Link>
    </div>
  );
};

export default List;
