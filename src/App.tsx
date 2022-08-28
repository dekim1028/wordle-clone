import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import store, { persistor } from './store';
import GamePage from './pages/GamePage';
import GlobalStyle from './assets/styles/GlobalStyle';
import { theme } from './assets/styles/theme';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <GamePage />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
