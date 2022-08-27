import React from 'react';
import Key from './Key';
import useKeyBoard from './useKeyBoard';
import * as STC from './KeyBoard.style';

const KeyBoard = () => {
  const { keyboardLayout } = useKeyBoard();

  return (
    <STC.Container>
      {keyboardLayout.map((raw, idx) => (
        <STC.KeyboardRaw key={`keyboard_raw_${idx}`}>
          {raw.map((value: string) => (
            <Key key={value} value={value} />
          ))}
        </STC.KeyboardRaw>
      ))}
    </STC.Container>
  );
};

export default KeyBoard;
