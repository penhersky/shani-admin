import * as React from 'react';
import admin from '../../admin';
import customer from '../../user/customer';
import performer from '../../user/performer';

import UserList from './UserList';

import './style.css';

const Info = () => (
  <div className='info'>
    <UserList type='Customer' icon={customer.icon} />
    <UserList type='Performer' icon={performer.icon} />
    <UserList type='Admin' icon={admin.icon} />
  </div>
);

export default Info;
