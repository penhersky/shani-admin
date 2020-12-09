import * as React from 'react';
import CustomerIcon from '@material-ui/icons/PersonAdd';

import UserList from './UserList';

import './style.css';

const Info = () => (
  <div className='info'>
    <UserList type='Customer' icon={CustomerIcon} />
    <UserList type='Performer' icon={CustomerIcon} />
    <UserList type='Admin' icon={CustomerIcon} />
  </div>
);

export default Info;
