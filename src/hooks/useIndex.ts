import { useState } from 'react';

/**
 * @param { number | null } initialIndex
 *
 * @example const [hoverdIndex, enterIndex, LeaveIndex] = useNumber()
 */
const useIndex = (initialIndex: number | null = null) => {
  const [index, setIndex] = useState(initialIndex);

  const setNextIndex = (nextIndex: number) => {
    setIndex(nextIndex);
  };

  const setNull = () => {
    setIndex(null);
  };

  return [index, setNextIndex, setNull] as const;
};

export default useIndex;
