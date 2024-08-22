import React from 'react';
import { Outlet } from 'react-router-dom';

function HomeScreen() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default HomeScreen;
