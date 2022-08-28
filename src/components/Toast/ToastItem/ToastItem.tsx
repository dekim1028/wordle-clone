import React from 'react';
import * as STC from './ToastItem.style';

const ToastItem = ({ text }: { text: string }) => {
  return <STC.Container>{text}</STC.Container>;
};

export default ToastItem;
