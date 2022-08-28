import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 15px 40px;
  background-color: ${({ theme }) => theme.color.gray01};
  color: ${({ theme }) => theme.color.white};
  border-radius: 4px;
`;
