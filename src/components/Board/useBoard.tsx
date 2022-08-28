import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hoc/useRedux';
import Tile from '../Tile';
import * as STC from './Board.style';

const useBoard = () => {
  const [triedTiles, setTriedTiles] = useState<JSX.Element[]>([]);
  const [nowTiles, setNowTiles] = useState<JSX.Element | null>(null);
  const [blankTiles, setBlankTiles] = useState<JSX.Element[]>([]);

  const { tried, inputList } = useAppSelector(({ board }) => ({
    tried: board.tried,
    inputList: board.inputList,
  }));

  useEffect(() => {
    if (tried > 5) {
      setNowTiles(null);
      return;
    }

    const word = inputList[tried];
    const raw: JSX.Element[] = [];

    for (let i = 0; i < word.length; i += 1) {
      raw.push(<Tile key={`word_${i}`} letter={word[i]} />);
    }
    for (let i = 0; i < 5 - word.length; i += 1) {
      raw.push(<Tile key={`word_${raw.length + i}`} />);
    }

    const _nowTiles: JSX.Element = <STC.Raw>{raw}</STC.Raw>;

    setNowTiles(_nowTiles);
  }, [tried, inputList]);

  useEffect(() => {
    const _triedTiles: JSX.Element[] = [];

    for (let i = 0; i < tried; i++) {
      const raw = inputList[i];
      _triedTiles.push(
        <STC.Raw key={`tried_raw_${i}`}>
          {raw.map((letter, idx) => (
            <Tile key={`tried_tile_${idx}`} letter={letter} />
          ))}
        </STC.Raw>
      );
    }

    setTriedTiles(_triedTiles);
  }, [tried]);

  useEffect(() => {
    const _blankTiles: JSX.Element[] = [];

    for (let i = 0; i < 6 - (tried + 1); i++) {
      _blankTiles.push(
        <STC.Raw key={`blank_raw_${i}`}>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </STC.Raw>
      );
    }

    setBlankTiles(_blankTiles);
  }, [tried]);

  return { triedTiles, nowTiles, blankTiles };
};

export default useBoard;
