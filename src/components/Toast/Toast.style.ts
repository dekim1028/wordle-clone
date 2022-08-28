import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: ${({ theme }) => theme.headerHeight}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(-50%);
  max-height: ${({ theme }) => `calc(100vh - ${theme.headerHeight}px)`};
  overflow: auto;
  z-index: 3;
`;
