import React from 'react';
import get from 'lodash/get';

const DateField = ({ source, record = {} }) => {
  const date = new Date(Number(get(record, source)));
  return (
    <span>
      {date.toLocaleTimeString()} {date.toLocaleDateString()}
    </span>
  );
};

export default DateField;
