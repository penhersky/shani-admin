import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery, Box } from '@material-ui/core';
import { MenuItemLink, DashboardMenuItem, useTranslate } from 'react-admin';
import { withRouter } from 'react-router-dom';
import { People } from '@material-ui/icons';

import customer from '../customer';
import performer from '../performer';
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
        icon={<People />}
        dense={dense}
      >
        <MenuItemLink
          to={`/customer`}
          primaryText={translate(`customers`, {
            smart_count: 2,
          })}
          leftIcon={<customer.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
        <MenuItemLink
          to={`/performer`}
          primaryText={translate(`performers`, {
            smart_count: 2,
          })}
          leftIcon={<performer.icon />}
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
