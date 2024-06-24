import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderPage from '../components/HeaderPage';

const HomeTemplate = () => {
  return (
    <div>
      <HeaderPage />
      <Outlet />
    </div>
  );
};

export default HomeTemplate;
