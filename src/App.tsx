import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themes } from './constants';

function App() {
  return (
    <ThemeProvider theme={themes}>
      <div />
    </ThemeProvider>
  );
}

export default App;
