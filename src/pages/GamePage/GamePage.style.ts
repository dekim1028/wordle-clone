import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Header = styled.header`
  width: 100%;
  height: ${({ theme }) => theme.headerHeight}px;
  box-sizing: border-box;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray04};
`;

export const Title = styled.div`
  line-height: ${({ theme }) => theme.headerHeight}px;
  text-align: center;
  font-weight: 700;
  font-size: 28px;
  color: ${({ theme }) => theme.color.gray01};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 65px);
  margin: 0 auto;
`;
