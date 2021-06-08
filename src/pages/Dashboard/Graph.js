import React from 'react';
import { Card } from '@material-ui/core';

import Chart from './chart';

const QUERY = `
query {
  _getSingUpUsersByInterval{
   createdAt
 }
}
`;

const Graph = (props) => {
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    const data = fetch(`${process.env.REACT_APP_ACCOUNT_SERVER_URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-admin-security-token-x': localStorage.getItem('token'),
      },
      body: JSON.stringify({
        query: QUERY,
      }),
    }).then((r) => r.json());
    data.then((inf) => setList(inf.data?._getSingUpUsersByInterval));
  }, []);

  return (
    <Card className='graph d-margin'>
      <Chart
        list={list}
        width={700}
        title='Users registered by the last 30 day'
      />
    </Card>
  );
};

export default Graph;
