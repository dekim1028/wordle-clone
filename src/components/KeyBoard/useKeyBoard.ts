import { useState } from 'react';

const useKeyBoard = () => {
  const [keyboardLayout] = useState([
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['{enter}', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '{delete}'],
  ]);

  return { keyboardLayout };
};

export default useKeyBoard;
