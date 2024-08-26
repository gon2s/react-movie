import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { themes } from './constants';
import AppRouter from './router';

function App() {
  return (
    <ThemeProvider theme={themes}>
      <RouterProvider router={AppRouter} />
    </ThemeProvider>
  );
}

export default App;
