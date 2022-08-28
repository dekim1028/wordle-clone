import useBoard from './useBoard';
import * as STC from './Board.style';

const Board = ({
  boardSize,
}: {
  boardSize: { width: number; height: number };
}) => {
  const { triedTiles, nowTiles, blankTiles } = useBoard();

  return (
    <STC.Container>
      <STC.Wrapper boardSize={boardSize}>
        {triedTiles}
        {nowTiles}
        {blankTiles}
      </STC.Wrapper>
    </STC.Container>
  );
};

export default Board;
