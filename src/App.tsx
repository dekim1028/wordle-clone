import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './store';
import GamePage from './pages/GamePage';
import GlobalStyle from './assets/styles/GlobalStyle';
import { theme } from './assets/styles/theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GamePage />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
