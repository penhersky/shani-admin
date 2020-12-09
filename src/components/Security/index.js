import React from 'react';

import { getLevel } from '../../accessLevels';

const Security = (props) => {
  return <>{getLevel() < (props.level ?? 50) ? null : props?.children}</>;
};

export default Security;
