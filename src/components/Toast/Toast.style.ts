import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: ${({ theme }) => theme.headerHeight}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: ${({ theme }) => `calc(100vh - ${theme.headerHeight}px)`};
  overflow: auto;
`;
