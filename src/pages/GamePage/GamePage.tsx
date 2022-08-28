import React from 'react';
import Board from '../../components/Board';
import KeyBoard from '../../components/KeyBoard';
import Toast from '../../components/Toast';
import ShareModal from '../../components/ShareModal';
import useGamePage from './useGamePage';
import * as STC from './GamePage.style';

const GamePage = () => {
  const { boardSize, checkWords } = useGamePage();

  return (
    <STC.Container>
      <STC.Header>
        <STC.Title>Wordle</STC.Title>
      </STC.Header>
      <STC.Content>
        <Board boardSize={boardSize} />
        <KeyBoard checkWords={checkWords} />
      </STC.Content>
      <Toast />
      <ShareModal />
    </STC.Container>
  );
};

export default GamePage;
