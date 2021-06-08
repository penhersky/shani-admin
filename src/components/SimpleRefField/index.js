import React from 'react';
import { Link } from 'react-admin';
import get from 'lodash/get';

const DateField = ({ source, record = {}, root, rootKey }) => {
  return (
    <Link
      to={`/${root ? root : get(record, rootKey)}/${record.id}/show`}
      style={{ margin: 5 }}
    >
      {get(record, source)}
    </Link>
  );
};

export default DateField;
