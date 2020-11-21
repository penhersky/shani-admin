import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery, Box } from '@material-ui/core';
import { MenuItemLink, DashboardMenuItem, useTranslate } from 'react-admin';
import { withRouter } from 'react-router-dom';

import user from '../users';
import admin from '../admin';

import SubMenu from './SubMenu';

const Menu = ({ onMenuClick, logout, dense = false }) => {
  const translate = useTranslate();
  const [state, setState] = useState({
    menuCatalog: true,
    menuSales: true,
    menuCustomers: true,
  });
  const isXSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const open = useSelector((state) => state.admin.ui.sidebarOpen);

  const handleToggle = (menu) => {
    setState((state) => ({ ...state, [menu]: !state[menu] }));
  };
  return (
    <Box mt={1}>
      <DashboardMenuItem onClick={onMenuClick} sidebarIsOpen={open} />
      <SubMenu
        handleToggle={() => handleToggle('menuSales')}
        isOpen={state.menuSales}
        sidebarIsOpen={open}
        name='users'
        icon={<user.icon />}
        dense={dense}
      >
        <MenuItemLink
          to={`/users`}
          primaryText={translate(`users`, {
            smart_count: 2,
          })}
          leftIcon={<user.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
      </SubMenu>
      <MenuItemLink
        to={`/admins`}
        primaryText={translate(`admins`, {
          smart_count: 2,
        })}
        leftIcon={<admin.icon />}
        onClick={onMenuClick}
        sidebarIsOpen={open}
        dense={dense}
      />
      {isXSmall && logout}
    </Box>
  );
};

export default withRouter(Menu);
