import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery, Box } from '@material-ui/core';
import { MenuItemLink, DashboardMenuItem } from 'react-admin';
import { withRouter } from 'react-router-dom';
import { People } from '@material-ui/icons';
import FolderSharedIcon from '@material-ui/icons/FolderShared';

import customer from '../user/customer';
import performer from '../user/performer';
import admin from '../admin';
import profile from '../user/Profile';

import SubMenu from './SubMenu';

const Menu = ({ onMenuClick, logout, dense = false }) => {
  const [state, setState] = useState({
    userFolder: true,
    user: true,
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
        handleToggle={() => handleToggle('user')}
        isOpen={state.user}
        sidebarIsOpen={open}
        name='users'
        icon={<People />}
        dense={dense}
      >
        <MenuItemLink
          to={`/customer`}
          primaryText={`customers`}
          leftIcon={<customer.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
        <MenuItemLink
          to={`/performer`}
          primaryText={`performers`}
          leftIcon={<performer.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
        <SubMenu
          handleToggle={() => handleToggle('userFolder')}
          isOpen={state.userFolder}
          sidebarIsOpen={open}
          name='UserData'
          icon={<FolderSharedIcon />}
          dense={dense}
        >
          <MenuItemLink
            to={`/profile`}
            primaryText={`profiles`}
            leftIcon={<profile.icon />}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
          />
        </SubMenu>
      </SubMenu>
      <MenuItemLink
        to={`/admin`}
        primaryText={`admins`}
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
