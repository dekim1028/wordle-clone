import React from 'react';
import { WordStatusType } from '../../types/board';
import * as STC from './Tile.style';

const Tile = ({
  letter,
  status,
}: {
  letter?: string;
  status?: WordStatusType;
}) => {
  return (
    <STC.Container hasLetter={letter ? true : false} status={status}>
      {letter ?? ''}
    </STC.Container>
  );
};

export default Tile;
