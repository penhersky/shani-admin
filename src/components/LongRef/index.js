import React from 'react';
import { Labeled, Link } from 'react-admin';
import get from 'lodash/get';

const RefField = ({
  source,
  rootSource,
  record = {},
  label,
  root,
  rootKey,
  content,
}) => {
  if (!get(record, rootSource)) return null;
  return (
    <Labeled label={label}>
      <Link
        to={`/${
          root ? root : get(get(get(record, rootSource), source), rootKey)
        }/${get(get(record, rootSource), source)?.id}/show`}
      >
        {get(get(get(record, rootSource), source), content)}
      </Link>
    </Labeled>
  );
};

export default RefField;
