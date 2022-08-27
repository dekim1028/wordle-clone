import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IBoardInitState } from '../../types/board';

const initialState: IBoardInitState = {
  tried: 0,
  inputList: [[]],
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setInputList: (state, { payload }: PayloadAction<string>) => {
      const targetIdx = state.inputList.findIndex(words => words.length < 5);
      if (targetIdx > -1) {
        state.inputList[targetIdx] = [...state.inputList[targetIdx], payload];
      }
    },
    deleteInput: state => {
      const nowWords = state.inputList[state.tried];
      const temp = nowWords.slice(0, -1);
      state.inputList[state.tried] = temp;
    },
    updateTried: state => {
      state.tried += 1;
      // TODO : 도전횟수 넘겼을 때 처리
      state.inputList = [...state.inputList, []];
    },
  },
});

export const { setInputList, deleteInput, updateTried } = boardSlice.actions;

export default boardSlice.reducer;
