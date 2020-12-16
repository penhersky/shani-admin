import React from 'react';
import { Labeled, Link } from 'react-admin';
import get from 'lodash/get';

const RefField = ({ source, record = {}, label, root, rootKey, content }) => {
  if (!get(record, source)) return null;
  return (
    <Labeled label={label}>
      <Link
        to={`/${root ? root : get(get(record, source), rootKey)}/${
          get(record, source)?.id
        }/show`}
      >
        {get(get(record, source), content)}
      </Link>
    </Labeled>
  );
};

export default RefField;
