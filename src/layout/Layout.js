import * as React from 'react';
import { Layout, Sidebar } from 'react-admin';
// import AppBar from './AppBar';
import Menu from './Menu';
import theme from '../theme';

const CustomSidebar = (props) => <Sidebar {...props} size={200} />;

const LayoutA = (props) => {
  return (
    <Layout
      {...props}
      // appBar={AppBar}
      sidebar={CustomSidebar}
      menu={Menu}
      theme={theme}
    />
  );
};

export default LayoutA;
