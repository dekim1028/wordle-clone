import styled, { css } from 'styled-components';
import { WordStatusType } from '../../../types/board';

export const Container = styled.div<{ status: WordStatusType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 58px;
  margin-right: 6px;
  padding: 0 17px;
  border: 0;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.gray04};
  font-weight: bold;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  ${({ status }) =>
    status &&
    css`
      color: ${({ theme }) => theme.color.white};
    `};

  ${({ theme, status }) =>
    status === 'C'
      ? css`
          background-color: ${theme.tile.green};
        `
      : status === 'W'
      ? css`
          background-color: ${theme.tile.yellow};
        `
      : status === 'N' &&
        css`
          background-color: ${theme.tile.gray};
        `};
`;
