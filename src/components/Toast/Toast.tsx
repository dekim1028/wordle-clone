import React from 'react';
import ToastItem from './ToastItem';
import useToast from './useToast';
import * as STC from './Toast.style';

const Toast = () => {
  const { toasts } = useToast();
  return (
    <STC.Container>
      {toasts.map(toast => {
        return <ToastItem key={toast.key} text={toast.text} />;
      })}
    </STC.Container>
  );
};

export default Toast;
