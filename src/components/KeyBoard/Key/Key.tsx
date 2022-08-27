import React from 'react';
import * as STC from './Key.style';

const Key = ({ value }: { value: string }) => {
  return (
    <STC.Container status="">
      {['{enter}', '{delete}'].includes(value)
        ? value.replace(/[{,}]/g, '')
        : value}
    </STC.Container>
  );
};

export default Key;
