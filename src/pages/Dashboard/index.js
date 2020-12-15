import * as React from 'react';
import { Card, CardContent } from '@material-ui/core';

import Welcome from './welcome';
import Info from './info';
import Settings from './settings';
import Graph from './Graph';

import './style.css';

const dashboard = () => (
  <div>
    <Welcome />
    <Card>
      <CardContent className='d-content'>
        <div className='top'>
          <Graph />
          <Settings />
        </div>

        <Info />
      </CardContent>
    </Card>
  </div>
);

export default dashboard;
