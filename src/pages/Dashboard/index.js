import * as React from 'react';
import { Card, CardContent } from '@material-ui/core';

import Welcome from './welcome';
import Info from './info';
import Settings from './settings';
import Graph from './Graph';

import Chart from './chart';

import './style.css';

const QUERY = `
query {
  _getOrdersByTimeInterval {
    createdAt
  }
}
`;

const Dashboard = () => {
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    const data = fetch(`${process.env.REACT_APP_ACCOUNT_SERVER_URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-service-security-token-x': localStorage.getItem('service_token'),
      },
      body: JSON.stringify({
        query: QUERY,
      }),
    }).then((r) => r.json());
    data.then((inf) => setList(inf.data?._getOrdersByTimeInterval));
  }, []);
  return (
    <div>
      <Welcome />
      <Card>
        <CardContent className='d-content'>
          <div className='top'>
            <Graph />
            <Settings />
          </div>
          <Chart
            list={list}
            width={1110}
            title='Created orders by the last 30 days'
          />
          <Info />
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
