import React from 'react';
import { ThemeProvider } from 'styled-components';
import MainPage from './pages/MainPage';
import GlobalStyle from './assets/styles/GlobalStyle';
import { theme } from './assets/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
