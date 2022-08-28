import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IBoardInitState, ITriedData } from '../../types/board';

const initialState: IBoardInitState = {
  tried: 0,
  triedData: [],
  inputList: [[]],
  answer: '',
  wordData: {
    A: '',
    B: '',
    C: '',
    D: '',
    E: '',
    F: '',
    G: '',
    H: '',
    I: '',
    J: '',
    K: '',
    L: '',
    M: '',
    N: '',
    O: '',
    P: '',
    Q: '',
    R: '',
    S: '',
    T: '',
    U: '',
    V: '',
    W: '',
    X: '',
    Y: '',
    Z: '',
  },
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
    setAnswer: (state, { payload }: PayloadAction<string>) => {
      state.answer = payload;
    },
    setTriedData: (state, { payload }: PayloadAction<ITriedData[]>) => {
      state.tried += 1;
      state.triedData = [...state.triedData, payload];

      if (state.tried < 6) {
        state.inputList = [...state.inputList, []];
      }
    },
    setWordData: (state, { payload }: PayloadAction<ITriedData[]>) => {
      payload.forEach(data => {
        if (state.wordData[data.key] === 'C') return;
        state.wordData[data.key] = data.status;
      });
    },
  },
});

export const {
  setInputList,
  deleteInput,
  setAnswer,
  setTriedData,
  setWordData,
} = boardSlice.actions;

export default boardSlice.reducer;
