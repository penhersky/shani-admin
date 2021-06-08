import React from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line,
} from 'recharts';
import _ from 'lodash';
import {} from 'date-fns';

const format = (i) => new Date(Number(i.createdAt)).toLocaleDateString();

const getRevenuePerDay = (list) => {
  const result = _(list).map(format).uniq().value();
  const a = _(result)
    .map((v) => {
      const count = _.countBy(list, format);
      return {
        date: v,
        count: _.get(count, v),
      };
    })
    .sortBy('date')
    .value();
  return a;
};

const chart = ({ list, title, width, height = 245, color = '#5B54FE' }) => {
  return (
    <Card>
      <CardHeader title={title} />
      <CardContent style={{ width: '100%', height }}>
        <AreaChart
          width={width}
          height={height}
          data={getRevenuePerDay(list)}
          margin={5}
        >
          <defs>
            <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#5B54FE' stopOpacity={1} />
              <stop offset='95%' stopColor='#8884d8' stopOpacity={0.3} />
            </linearGradient>
          </defs>
          <XAxis dataKey='date' name='Date' />
          <YAxis dataKey='count' name='Count' />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip
            cursor={{ strokeDasharray: '3 3' }}
            contentStyle={{ color: '#444444' }}
          />

          <Line type='monotone' dataKey='count' stroke={color} />
          <Area
            type='monotone'
            dataKey='count'
            stroke={color}
            strokeWidth={2}
            fill='url(#colorUv)'
          />
        </AreaChart>
      </CardContent>
    </Card>
  );
};

export default chart;
