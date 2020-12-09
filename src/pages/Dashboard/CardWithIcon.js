import * as React from 'react';
import { createElement } from 'react';
import { Card, Box, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import cartoucheDark from './cartoucheDark.png';

const useStyles = makeStyles((theme) => ({
  card: {
    minHeight: 52,
    width: 300,
    margin: 5,
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    '& a': {
      textDecoration: 'none',
      color: 'inherit',
    },
  },
  main: (props) => ({
    overflow: 'inherit',
    padding: 16,
    background: `url(${cartoucheDark}) no-repeat`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& .icon': {
      color: '#5B54FE',
    },
  }),
  title: {},
}));

const CardWithIcon = (props) => {
  const { icon, title, subtitle, to, children } = props;
  const classes = useStyles(props);
  return (
    <Card className={classes.card}>
      <Link to={to}>
        <div className={classes.main}>
          <Box width='3em' className='icon'>
            {createElement(icon, { fontSize: 'large' })}
          </Box>
          <Box textAlign='right'>
            <Typography className={classes.title} color='textSecondary'>
              {title}
            </Typography>
            <Typography variant='h5' component='h2'>
              {subtitle || ' '}
            </Typography>
          </Box>
        </div>
      </Link>
      {children && <Divider />}
      {children}
    </Card>
  );
};

export default CardWithIcon;
