import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hoc/useRedux';
import {
  deleteInput,
  setAnswer,
  setInputList,
  setTriedData,
} from '../../store/slice/boardSlice';
import words from '../../assets/data/words.json';
import { theme } from '../../assets/styles/theme';
import { ITriedData } from '../../types/board';

const useGamePage = () => {
  const dispatch = useAppDispatch();

  const [boardSize, setBoardSize] = useState({
    width: theme.maxBoardSize.width,
    height: theme.maxBoardSize.height,
  });

  const { tried, triedData, inputList, answer } = useAppSelector(
    ({ board }) => ({
      tried: board.tried,
      triedData: board.triedData,
      inputList: board.inputList,
      answer: board.answer,
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
      // TODO : toast 띄우기
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

    dispatch(setTriedData(triedResult.sort((cu, pr) => cu.idx - pr.idx)));
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
    if (tried === 0) return;

    const checkCorrect = triedData[tried - 1].some(data => data.status === 'C');
    if (tried === 6 || checkCorrect) {
      // TODO: 공유 모달
      console.log('END');
    }
  }, [tried]);

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [inputList, tried]);

  useEffect(() => {
    const random = Math.floor(Math.random() * words.length);
    dispatch(setAnswer(words[random].toUpperCase()));

    window.addEventListener('resize', onWindowResized);

    return () => {
      window.removeEventListener('resize', onWindowResized);
    };
  }, []);

  return { boardSize };
};

export default useGamePage;
