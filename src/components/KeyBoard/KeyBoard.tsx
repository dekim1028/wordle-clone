import React from 'react';
import Key from './Key';
import useKeyBoard from './useKeyBoard';
import * as STC from './KeyBoard.style';

const KeyBoard = ({ checkWords }: { checkWords: () => void }) => {
  const { keyboardLayout, wordData, onKeyDown } = useKeyBoard({ checkWords });

  return (
    <STC.Container>
      {keyboardLayout.map((raw, idx) => (
        <STC.KeyboardRaw key={`keyboard_raw_${idx}`}>
          {raw.map((value: string) => (
            <Key
              key={value}
              value={value}
              status={wordData[value] ?? ''}
              onKeyDown={onKeyDown}
            />
          ))}
        </STC.KeyboardRaw>
      ))}
    </STC.Container>
  );
};

export default KeyBoard;
