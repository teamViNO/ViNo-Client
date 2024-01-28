import { useCallback, useEffect } from 'react';

const useDebounce = <T>(func: () => void, value: T, delay = 500) => {
  const callback = useCallback(func, [func, value]);

  useEffect(() => {
    const timer = setTimeout(callback, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [callback, delay]);
};

export default useDebounce;
