import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const Wrapper = styled.div<{
  boardSize: { width: number; height: number };
}>`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 5px;
  width: ${({ boardSize }) => boardSize.width}px;
  height: ${({ boardSize }) => boardSize.height}px;
  max-width: ${({ theme }) => theme.maxBoardSize.width}px;
  max-height: ${({ theme }) => theme.maxBoardSize.height}px;
  padding: 10px;
  box-sizing: border-box;
`;

export const Raw = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
`;
