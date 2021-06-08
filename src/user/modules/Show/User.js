import * as React from 'react';
import _ from 'lodash';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Card, Box, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  topContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 200,
  },
  right: {
    display: 'flex',
    flexDirection: 'row',
    minWidth: 400,
    padding: 5,
  },
  active: {
    padding: 5,
    width: 'max-content',
    textTransform: 'uppercase',
    margin: 3,
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    margin: 5,
  },
  contacts: {
    width: 300,
    padding: 5,
  },
  account: {
    width: 300,
    display: 'flex',
    flexDirection: 'column',
    padding: 5,
  },
  contact: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
  },
  img: {
    height: 200,
    margin: 5,
  },
}));

const User = (props) => {
  const [user, setUser] = React.useState({});
  const classes = useStyles(props);
  const birthday = new Date(Number(user?.birthday));

  React.useEffect(() => {
    if (props.record.user) setUser(props.record.user);
  }, [props.record, setUser]);
  return (
    <div className={classes.topContent}>
      <Card className={classes.right}>
        <img
          src={_.find(user?.images, { active: true })?.Location ?? '/user.png'}
          alt=''
          className={classes.img}
        />
        <Box className={classes.left}>
          <Typography variant='h4'>{user?.name}</Typography>
          <Typography variant='h6'>{`${user?.firstName ?? ''} ${
            user?.middleName ?? ''
          } ${user?.lastName ?? ''}`}</Typography>
          <Typography variant='subtitle1'>{user?.email}</Typography>
          <Typography
            className={classes.active}
            style={{
              border: `solid 1px ${user?.active ? '#0FAE71' : 'white'}`,
            }}
          >
            {user.active ? 'confirmed' : 'not confirmed'}
          </Typography>

          <Typography variant='subtitle1'>
            {user?.birthday ? birthday.toLocaleDateString() : null}
          </Typography>
          <Typography variant='subtitle1'>
            {user?.location?.name ? user?.location?.name : null}
          </Typography>
        </Box>
      </Card>

      <Card className={classes.contacts}>
        <Typography variant='h6'>Contacts</Typography>
        {_.map(user?.contacts, (contact) => (
          <a href={contact?.value} key={contact?.id}>
            <div className={classes.contact}>
              <Typography className={classes.contact}>
                {contact?.show ? (
                  <Visibility style={{ margin: '0 5px' }} />
                ) : (
                  <VisibilityOff style={{ margin: '0 5px' }} />
                )}
              </Typography>
              <Typography>{contact?.name}</Typography>
            </div>
          </a>
        ))}
      </Card>

      <Card className={classes.account}>
        <Typography variant='h6'>AccountType</Typography>

        <Typography variant='subtitle1'>{`type: ${user.accountType?.status}`}</Typography>
        <Typography variant='subtitle1'>{`from: ${new Date(
          Number(user.accountType?.from),
        ).toLocaleDateString()}`}</Typography>
        <Typography variant='subtitle1'>
          {user?.accountType?.to &&
            `to: ${new Date(
              Number(user.accountType?.to),
            ).toLocaleDateString()}`}
        </Typography>
      </Card>
    </div>
  );
};

export default User;
