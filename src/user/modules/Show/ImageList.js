import * as React from 'react';
import _ from 'lodash';
import { Link } from 'react-admin';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  imgList: {
    display: 'flex',
    flexDirection: 'row',
    padding: '8px 3px',
  },
  link: {
    height: 150,
    borderRadius: 5,
    margin: 2,
  },
  img: {
    orderRadius: 5,
    height: 150,
  },
}));

const List = (props) => {
  const [images, setImages] = React.useState([]);
  const classes = useStyles(props);
  React.useEffect(() => {
    if (props.record.user) setImages(props.record.user.images);
  }, [props.record, setImages]);

  return (
    <div className={classes.imgList}>
      {_.map(images, (image) => (
        <Link
          className={classes.link}
          key={image.id}
          to={`/Image/${image.id}`}
          style={{ border: `1px solid ${image.active ? '#0FAE71' : 'white'}` }}
        >
          <img src={image.Location} alt={image.id} className={classes.img} />
        </Link>
      ))}
    </div>
  );
};

export default List;
