import React from 'react';
import { ThemeProvider } from 'styled-components';
import GamePage from './pages/GamePage';
import GlobalStyle from './assets/styles/GlobalStyle';
import { theme } from './assets/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GamePage />
    </ThemeProvider>
  );
}

export default App;
