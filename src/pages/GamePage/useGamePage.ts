import { useEffect, useState } from 'react';
import { theme } from '../../assets/styles/theme';

const useGamePage = () => {
  const [boardSize, setBoardSize] = useState({
    width: theme.maxBoardSize.width,
    height: theme.maxBoardSize.height,
  });

  const onWindowResized = () => {
    const height = Math.round(
      window.innerHeight - theme.keyboardHeight - theme.headerHeight
    );
    const width = Math.round(
      height * (theme.maxBoardSize.width / theme.maxBoardSize.height)
    );

    setBoardSize({ width, height });
  };

  useEffect(() => {
    window.addEventListener('resize', onWindowResized);

    return () => {
      window.removeEventListener('resize', onWindowResized);
    };
  }, []);

  return { boardSize };
};

export default useGamePage;
