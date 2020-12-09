import * as React from 'react';
import { Card, CardContent } from '@material-ui/core';

import Welcome from './welcome';
import Info from './info';

import './style.css';

const dashboard = () => (
  <div>
    <Welcome />
    <Card>
      <CardContent className='d-content'>
        <div className='graph'></div>
        <Info />
      </CardContent>
    </Card>
  </div>
);

export default dashboard;
