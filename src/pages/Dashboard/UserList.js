import * as React from 'react';
import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useQueryWithStore } from 'react-admin';

import CardWithIcon from './CardWithIcon';

const useStyles = makeStyles((theme) => ({
  link: {
    borderRadius: 0,
  },
  linkContent: {
    color: theme.palette.primary.main,
  },
}));

const NList = (props) => {
  const classes = useStyles();
  const { loaded, data, total } = useQueryWithStore({
    type: 'getList',
    resource: String(props.type),
    payload: {
      sort: { field: 'createdAt', order: 'DESC' },
      pagination: { page: 1, perPage: 10 },
    },
  });

  if (!loaded) return null;

  return (
    <CardWithIcon
      to={`/${String(props.type).toLowerCase()}`}
      icon={props.icon}
      title={`${props.type}s`}
      subtitle={total}
    >
      <List>
        {data
          ? data.map((record) => (
              <ListItem
                button
                to={`/${props.type}/${record.id}`}
                component={Link}
                key={record.id}
              >
                <ListItemAvatar>
                  <Avatar
                    src={`${record.image ?? record?.imageUrl}?size=32x32`}
                  />
                </ListItemAvatar>
                <ListItemText primary={`${record.name} ${record.email}`} />
              </ListItem>
            ))
          : null}
      </List>
      <Box flexGrow='1'>&nbsp;</Box>
      <Button
        className={classes.link}
        component={Link}
        to={`/${String(props.type).toLowerCase()}`}
        size='small'
        color='primary'
      >
        <Box p={1} className={classes.linkContent}>
          more
        </Box>
      </Button>
    </CardWithIcon>
  );
};
export default NList;
