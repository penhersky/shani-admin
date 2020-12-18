import * as React from 'react';
import { Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  info: {
    margin: 8,
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
  },
}));

const Info = (props) => {
  const [profile, setProfile] = React.useState({});
  const classes = useStyles(props);
  React.useEffect(() => {
    if (props.record.user) setProfile(props.record.user.profile);
  }, [props.record, setProfile]);
  const created = new Date(Number(props?.record?.user?.createdAt));
  const confirmed = new Date(Number(profile?.createdAt));
  return (
    <Card className={classes.info}>
      <Typography variant='body2'>{`created: ${created.toDateString()} ${created.toTimeString()}`}</Typography>
      <Typography variant='body2'>
        {profile?.createdAt &&
          `confirmed: ${confirmed.toDateString()} ${confirmed.toTimeString()}`}
      </Typography>
    </Card>
  );
};

export default Info;
