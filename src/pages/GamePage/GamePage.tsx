import React from 'react';
import Board from '../../components/Board';
import KeyBoard from '../../components/KeyBoard';
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
    </STC.Container>
  );
};

export default GamePage;
