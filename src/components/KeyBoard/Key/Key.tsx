import React from 'react';
import { WordStatusType } from '../../../types/board';
import * as STC from './Key.style';

const Key = ({
  value,
  status,
  onKeyDown,
}: {
  value: string;
  status: WordStatusType;
  onKeyDown: (_: string) => void;
}) => {
  return (
    <STC.Container status={status} onClick={() => onKeyDown(value)}>
      {['{enter}', '{delete}'].includes(value)
        ? value.replace(/[{,}]/g, '')
        : value}
    </STC.Container>
  );
};

export default Key;
