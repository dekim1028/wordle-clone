import media from './media';

export const theme = {
  tile: {
    green: '#6aaa64',
    yellow: '#c9b458',
    gray: '#787c7e',
  },
  color: {
    gray01: '#000000',
    gray02: '#787c7e',
    gray03: '#878a8c',
    gray04: '#d3d6da',
    gray05: '#edeff1',
    gray06: '#f6f7f8',
    gray07: '#ffffff',
    gray08: '#121212',
    gray09: '#dfdfdf',
    gray10: '#787c7e',
    gray11: '#363636',
    white: '#ffffff',
  },
  keyboardHeight: 200,
  headerHeight: 65,
  maxBoardSize: {
    width: 350,
    height: 420,
  },
  media,
};

export type Theme = typeof theme;
