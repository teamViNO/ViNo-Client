import { useState } from 'react';

/**
 * @param { boolean } initialBool
 *
 * @example const [isOpen, isClose, open, close] = useBoolean()
 */
const useBoolean = (initialBool = true) => {
  const [bool, setBool] = useState(initialBool);

  const setTrue = () => {
    setBool(true);
  };

  const setFalse = () => {
    setBool(false);
  };

  return [bool, !bool, setTrue, setFalse, setBool] as const;
};

export default useBoolean;
