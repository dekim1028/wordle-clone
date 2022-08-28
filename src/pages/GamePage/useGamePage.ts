import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hoc/useRedux';
import {
  deleteInput,
  setAnswer,
  setInputList,
  setIsFinished,
  setTriedData,
  setWordData,
} from '../../store/slice/boardSlice';
import { addToast, setModalVisible } from '../../store/slice/utilSlice';
import { ITriedData } from '../../types/board';
import words from '../../assets/data/words.json';
import { theme } from '../../assets/styles/theme';

const useGamePage = () => {
  const dispatch = useAppDispatch();

  const [boardSize, setBoardSize] = useState({
    width: theme.maxBoardSize.width,
    height: theme.maxBoardSize.height,
  });

  const { tried, triedData, inputList, answer, isFinished } = useAppSelector(
    ({ board }) => ({
      tried: board.tried,
      triedData: board.triedData,
      inputList: board.inputList,
      answer: board.answer,
      isFinished: board.isFinished,
    })
  );

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
    const word = inputList[tried].slice();
    const answerArr = answer.split('');
    if (words.indexOf(word.join('').toLowerCase()) === -1) {
      dispatch(addToast('Not in word list'));
      return;
    }

    let triedResult: ITriedData[] = [];
    word.forEach((w, idx) => {
      if (w === answerArr[idx]) {
        word[idx] = '#';
        answerArr[idx] = '#';
        triedResult = [...triedResult, { idx, key: w, status: 'C' }];
      }
    });

    word.forEach((w, idx) => {
      if (w !== '#') {
        const usedIdx = answerArr.indexOf(w);
        if (usedIdx > -1) {
          answerArr[usedIdx] = '#';
          triedResult = [...triedResult, { idx, key: w, status: 'W' }];
        } else {
          triedResult = [...triedResult, { idx, key: w, status: 'N' }];
        }
      }
    });

    const result = triedResult.sort((cu, pr) => cu.idx - pr.idx);
    dispatch(setTriedData(result));
    dispatch(setWordData(result));
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (isFinished) return;
    const key = e.key;

    if (key === 'Enter') {
      if (inputList[tried].length === 5) {
        checkWords();
      } else {
        dispatch(addToast('Not enough letters'));
      }
    } else if (key === 'Backspace') {
      dispatch(deleteInput());
    } else if (key.length === 1 && /[a-z|A-Z]/.test(key)) {
      dispatch(setInputList(key.toUpperCase()));
    }
  };

  useEffect(() => {
    if (tried === 0) return;

    const checkCorrect = triedData[tried - 1].every(
      data => data.status === 'C'
    );
    if (tried === 6 || checkCorrect) {
      dispatch(setIsFinished());
      dispatch(setModalVisible(true));
    }
  }, [tried]);

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [inputList, tried, isFinished]);

  useEffect(() => {
    if (answer !== '') return;

    const random = Math.floor(Math.random() * words.length);
    dispatch(setAnswer(words[random].toUpperCase()));
  }, [answer]);

  useEffect(() => {
    onWindowResized();
    window.addEventListener('resize', onWindowResized);

    return () => {
      window.removeEventListener('resize', onWindowResized);
    };
  }, []);

  return { boardSize, checkWords };
};

export default useGamePage;
