import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hoc/useRedux';
import { resetGame } from '../../store/slice/boardSlice';
import { setModalVisible } from '../../store/slice/utilSlice';

const useShareModal = () => {
  const dispatch = useAppDispatch();
  const [result, setResult] = useState('');
  const { isModalVisible, tried, triedData } = useAppSelector(
    ({ util, board }) => ({
      isModalVisible: util.isModalVisible,
      tried: board.tried,
      triedData: board.triedData,
    })
  );

  const handleCloseModal = () => {
    dispatch(setModalVisible(false));
  };

  const handleRetry = () => {
    dispatch(resetGame());
    dispatch(setModalVisible(false));
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!isModalVisible) return;

    const now = new Date();
    const date = now.toISOString().split('T')[0];
    const time = now.toTimeString().split(' ')[0];

    let result = '';
    triedData.forEach(values => {
      let tempResult = '';
      values.forEach(value => {
        if (value.status === 'C') {
          tempResult += '🟩';
        } else if (value.status === 'W') {
          tempResult += '🟨';
        } else {
          tempResult += '⬛';
        }
      });
      result += `${tempResult}\n`;
    });

    const shareText = `Wordle ${date} ${time}  ${tried}/6\n\n${result}`;
    setResult(shareText);
  }, [isModalVisible]);

  return { isModalVisible, result, handleCloseModal, handleRetry, handleShare };
};

export default useShareModal;
