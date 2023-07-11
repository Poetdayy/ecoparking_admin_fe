import React from 'react';
import AppHeader from '../Components/AppHeader';
import SideMenu from '../Components/SideMenu';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <AppHeader></AppHeader>
      <div style={{display:"flex"}}>
        <SideMenu></SideMenu>
        <div style={{padding:"20px"}}>{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;