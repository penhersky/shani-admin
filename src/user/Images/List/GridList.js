import * as React from 'react';
import MuiGridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { makeStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import { linkToRecord, useListContext } from 'react-admin';
import { Link } from 'react-router-dom';
import { map } from 'lodash';

const useStyles = makeStyles((theme) => ({
  gridList: {
    margin: 0,
  },
  tileBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.4) 70%,rgba(0,0,0,0) 100%)',
  },
  placeholder: {
    backgroundColor: theme.palette.grey[300],
    height: '100%',
  },
  price: {
    display: 'inline',
    fontSize: '1em',
  },
  link: {
    color: '#fff',
  },
}));

const getColsForWidth = (width) => {
  if (width === 'xs') return 2;
  if (width === 'sm') return 3;
  if (width === 'md') return 3;
  if (width === 'lg') return 5;
  return 6;
};

const times = (nbChildren, fn) =>
  Array.from({ length: nbChildren }, (_, key) => fn(key));

const LoadingGridList = ({ width, nbItems = 20 }) => {
  const classes = useStyles();
  return (
    <MuiGridList
      cellHeight={180}
      cols={getColsForWidth(width)}
      className={classes.gridList}
    >
      {times(nbItems, (key) => (
        <GridListTile key={key}>
          <div className={classes.placeholder} />
        </GridListTile>
      ))}
    </MuiGridList>
  );
};

const LoadedGridList = ({ width }) => {
  const { data, basePath } = useListContext();
  const classes = useStyles();

  if (!data) return null;

  return (
    <MuiGridList
      cellHeight={180}
      cols={getColsForWidth(width)}
      className={classes.gridList}
    >
      {map(data, (item) => (
        <GridListTile
          component={Link}
          key={item.id}
          to={linkToRecord(basePath, item.id)}
          style={{ border: `solid 2px ${item.active ? '#0FAE71' : 'white'}` }}
        >
          <img src={item.Location} alt='' />
          <GridListTileBar
            className={classes.tileBar}
            title={item.user.name}
            subtitle={<span>{item.user.email}</span>}
          />
        </GridListTile>
      ))}
    </MuiGridList>
  );
};

const GridList = ({ width }) => {
  const { loaded } = useListContext();
  return loaded ? (
    <LoadedGridList width={width} />
  ) : (
    <LoadingGridList width={width} />
  );
};

export default withWidth()(GridList);
