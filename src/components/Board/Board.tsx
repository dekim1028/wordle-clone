import React from 'react';
import Tile from '../Tile';
import * as STC from './Board.style';

const Board = ({
  boardSize,
}: {
  boardSize: { width: number; height: number };
}) => {
  return (
    <STC.Container>
      <STC.Wrapper boardSize={boardSize}>
        <STC.Raw>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </STC.Raw>
        <STC.Raw>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </STC.Raw>
        <STC.Raw>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </STC.Raw>
        <STC.Raw>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </STC.Raw>
        <STC.Raw>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </STC.Raw>
        <STC.Raw>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </STC.Raw>
      </STC.Wrapper>
    </STC.Container>
  );
};

export default Board;
