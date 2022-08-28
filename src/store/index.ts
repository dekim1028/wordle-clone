import { configureStore } from '@reduxjs/toolkit';
import boardSlice from './slice/boardSlice';
import utilSlice from './slice/utilSlice';

const store = configureStore({
  reducer: {
    board: boardSlice,
    util: utilSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
