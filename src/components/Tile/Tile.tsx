import React from 'react';
import * as STC from './Tile.style';

const Tile = ({ letter }: { letter?: string }) => {
  return (
    <STC.Container hasLetter={letter ? true : false}>
      {letter ?? ''}
    </STC.Container>
  );
};

export default Tile;
