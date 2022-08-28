import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hoc/useRedux';
import {
  deleteInput,
  setInputList,
  updateTried,
} from '../../store/slice/boardSlice';
import { theme } from '../../assets/styles/theme';

const useGamePage = () => {
  const dispatch = useAppDispatch();

  const [boardSize, setBoardSize] = useState({
    width: theme.maxBoardSize.width,
    height: theme.maxBoardSize.height,
  });

  const { tried, inputList } = useAppSelector(({ board }) => ({
    tried: board.tried,
    inputList: board.inputList,
  }));

  const onWindowResized = () => {
    const height = Math.round(
      window.innerHeight - theme.keyboardHeight - theme.headerHeight
    );
    const width = Math.round(
      height * (theme.maxBoardSize.width / theme.maxBoardSize.height)
    );

    setBoardSize({ width, height });
  };

  const checkWords = () => {
    // TODO : 단어 검사
    dispatch(updateTried());
  };

  const onKeyDown = (e: KeyboardEvent) => {
    const key = e.key;

    if (key === 'Enter') {
      if (inputList[tried].length === 5) {
        checkWords();
      } else {
        // TODO : 에러
      }
    } else if (key === 'Backspace') {
      dispatch(deleteInput());
    } else if (key.length === 1 && /[a-z|A-Z]/.test(key)) {
      dispatch(setInputList(key.toUpperCase()));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [inputList, tried]);

  useEffect(() => {
    window.addEventListener('resize', onWindowResized);

    return () => {
      window.removeEventListener('resize', onWindowResized);
    };
  }, []);

  return { boardSize };
};

export default useGamePage;
