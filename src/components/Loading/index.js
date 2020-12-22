import React from 'react';

import './style.css';

const Loading = (props) => {
  return (
    <div className='load-container'>
      <div className='lds-hourglass'></div>
    </div>
  );
};

export default Loading;
