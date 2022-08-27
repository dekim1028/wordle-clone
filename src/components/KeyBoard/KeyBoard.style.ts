import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  height: ${({ theme }) => theme.keyboardHeight}px;
`;

export const KeyboardRaw = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 6px;
`;
