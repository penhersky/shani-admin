import React from 'react';

import { getLevel } from '../../accessLevels';

const Security = (props) => {
  return <>{getLevel() < 50 ? null : props?.children}</>;
};

export default Security;
