import styled, { css } from 'styled-components';

export const Container = styled.div<{ isModalVisible: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;

  ${({ isModalVisible }) =>
    !isModalVisible &&
    css`
      display: none;
    `};
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 350px;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.color.white}; ;
`;

export const CloseBtnWrapper = styled.div`
  padding: 20px;
`;

export const CloseBtn = styled.a`
  display: block;
  width: fit-content;
  margin-left: auto;
  font-size: 20px;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  text-align: center;
  white-space: pre-line;
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.div<{ isLeftBtn: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 65px;
  cursor: pointer;

  ${({ isLeftBtn, theme }) =>
    isLeftBtn
      ? css`
          background-color: ${theme.color.gray04};
        `
      : css`
          color: ${theme.color.white};
          background-color: ${theme.color.gray01};
        `};
`;
