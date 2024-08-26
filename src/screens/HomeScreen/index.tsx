import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@src/components';

function HomeScreen() {
  return (
    <div style={{ height: '200vh' }}>
      <Header />
      <Outlet />
    </div>
  );
}

export default HomeScreen;
