import * as React from 'react';
import { Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  description: {
    margin: 8,
    display: 'flex',
    flexDirection: 'column',
  },
}));

const Description = (props) => {
  const [ds, setDs] = React.useState('');
  const classes = useStyles(props);
  React.useEffect(() => {
    if (props.record.user) setDs(props.record?.user?.description);
  }, [props.record, setDs]);

  return (
    <Card className={classes.description}>
      <Typography variant='h5'>Description</Typography>
      <Typography variant='body2'>{ds}</Typography>
    </Card>
  );
};

export default Description;
