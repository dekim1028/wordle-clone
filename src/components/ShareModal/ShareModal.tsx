import React from 'react';
import * as STC from './ShareModal.style';
import useShareModal from './useShareModal';

const ShareModal = () => {
  const { isModalVisible, result, handleCloseModal, handleRetry, handleShare } =
    useShareModal();

  return (
    <STC.Container isModalVisible={isModalVisible}>
      <STC.Background onClick={handleCloseModal} />
      <STC.Modal>
        <STC.CloseBtnWrapper>
          <STC.CloseBtn onClick={handleCloseModal}>🆇</STC.CloseBtn>
        </STC.CloseBtnWrapper>
        <STC.Content>{result}</STC.Content>
        <STC.BtnWrapper>
          <STC.Button isLeftBtn={true} onClick={handleShare}>
            공유하기
          </STC.Button>
          <STC.Button isLeftBtn={false} onClick={handleRetry}>
            다시하기
          </STC.Button>
        </STC.BtnWrapper>
      </STC.Modal>
    </STC.Container>
  );
};

export default ShareModal;
