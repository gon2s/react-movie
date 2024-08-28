import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { HomeScreen, SearchScreen, TvScreen } from '@src/screens';

const AppRouter = createBrowserRouter([
  {
    path: '/*',
    element: <HomeScreen />,
    children: [
      {
        path: 'tv',
        element: <TvScreen />,
      },
    ],
  },
  {
    path: 'search',
    element: <SearchScreen />,
  },
]);

export default AppRouter;
