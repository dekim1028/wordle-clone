import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IUtilInitState } from '../../types/util';

const initialState: IUtilInitState = {
  toasts: [],
  isModalVisible: false,
};

export const utilSlice = createSlice({
  name: 'util',
  initialState,
  reducers: {
    addToast: (state, { payload }: PayloadAction<string>) => {
      state.toasts = [
        { key: Math.random().toString(), text: payload },
        ...state.toasts,
      ];
    },
    removeToast: (state, { payload }: PayloadAction<string>) => {
      state.toasts = state.toasts.filter(item => item.key !== payload);
    },
    setModalVisible: (state, { payload }: PayloadAction<boolean>) => {
      state.isModalVisible = payload;
    },
  },
});

export const { addToast, removeToast, setModalVisible } = utilSlice.actions;

export default utilSlice.reducer;
