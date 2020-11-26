import React from 'react';

import access from '../../accessLevels';

const Security = (props) => {
  const user = JSON.parse(localStorage.getItem('permissions'));
  const level = access(user.state);
  return <>{level < 50 ? null : props?.children}</>;
};

export default Security;
