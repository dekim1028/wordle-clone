import styled, { css } from 'styled-components';
import { WordStatusType } from '../../types/util';

export const Container = styled.div<{
  hasLetter: boolean;
  status?: WordStatusType;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.color.gray04};
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;

  &::before {
    content: '';
    display: inline-block;
    padding-bottom: 100%;
  }

  ${({ hasLetter }) =>
    hasLetter &&
    css`
      border: 2px solid ${({ theme }) => theme.color.gray03};
    `};

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
