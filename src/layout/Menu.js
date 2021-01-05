import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery, Box } from '@material-ui/core';
import { MenuItemLink, DashboardMenuItem } from 'react-admin';
import { withRouter } from 'react-router-dom';
import { People } from '@material-ui/icons';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import HomeIcon from '@material-ui/icons/Home';

import customer from '../user/customer';
import performer from '../user/performer';
import admin from '../admin';
import accountType from '../user/AccountType';
import security from '../user/Security';
import contacts from '../user/Contacts';
import location from '../user/Location';
import image from '../user/Images';

import { Category as category } from '../main';

import SubMenu from './SubMenu';

const Menu = ({ onMenuClick, logout, dense = false }) => {
  const [state, setState] = useState({
    userFolder: true,
    user: true,
    main: true,
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
        handleToggle={() => handleToggle('main')}
        isOpen={state.main}
        sidebarIsOpen={open}
        name='Main'
        icon={<HomeIcon />}
        dense={dense}
      >
        <MenuItemLink
          to={`/category`}
          primaryText={`categories`}
          leftIcon={<category.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
      </SubMenu>
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
          name='User Data'
          icon={<FolderSharedIcon />}
          dense={dense}
        >
          <MenuItemLink
            to={`/image`}
            primaryText={`images`}
            leftIcon={<image.icon />}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
          />
          <MenuItemLink
            to={`/contact`}
            primaryText={`contacts`}
            leftIcon={<contacts.icon />}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
          />
          <MenuItemLink
            to={`/accountType`}
            primaryText={`Account Types`}
            leftIcon={<accountType.icon />}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
          />
          <MenuItemLink
            to={`/security`}
            primaryText={`security`}
            leftIcon={<security.icon />}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
          />
          <MenuItemLink
            to={`/location`}
            primaryText={`locations`}
            leftIcon={<location.icon />}
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
