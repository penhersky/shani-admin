import React from 'react';
import { Labeled, Link } from 'react-admin';
import get from 'lodash/get';

const DateField = ({ source, record = {}, label, root, content }) => {
  return (
    <Labeled label={label}>
      <Link
        to={`/${get(get(record, source), root)}/${get(record, source).id}/show`}
      >
        {get(get(record, source), content)}
      </Link>
    </Labeled>
  );
};

export default DateField;
