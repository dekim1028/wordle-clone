import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hoc/useRedux';
import { deleteInput, setInputList } from '../../store/slice/boardSlice';
import { addToast } from '../../store/slice/utilSlice';

const useKeyBoard = ({ checkWords }: { checkWords: () => void }) => {
  const dispatch = useAppDispatch();

  const [keyboardLayout] = useState([
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['{enter}', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '{delete}'],
  ]);

  const { tried, inputList, wordData, isFinished } = useAppSelector(
    ({ board }) => ({
      tried: board.tried,
      inputList: board.inputList,
      wordData: board.wordData,
      isFinished: board.isFinished,
    })
  );

  const onKeyDown = (key: string) => {
    if (isFinished) return;

    if (key === '{enter}') {
      if (inputList[tried].length === 5) {
        checkWords();
      } else {
        dispatch(addToast('Not enough letters'));
      }
    } else if (key === '{delete}') {
      dispatch(deleteInput());
    } else if (key.length === 1 && /[a-z|A-Z]/.test(key)) {
      dispatch(setInputList(key.toUpperCase()));
    }
  };

  return { keyboardLayout, wordData, onKeyDown };
};

export default useKeyBoard;
