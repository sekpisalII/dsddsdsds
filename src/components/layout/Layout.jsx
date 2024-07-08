import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarComponent from '../navbar/NavbarComponent';
const Layout = () => {
  return (
    <div>
      <NavbarComponent />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
