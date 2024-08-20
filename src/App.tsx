import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Animation } from './components';
import { themes } from './constants';
import * as Styled from './styles';

function App() {
  return (
    <ThemeProvider theme={themes}>
      <Styled.Wrapper>
        <Styled.InnerBoxWrapper>
          <Animation />
        </Styled.InnerBoxWrapper>
      </Styled.Wrapper>
    </ThemeProvider>
  );
}

export default App;
