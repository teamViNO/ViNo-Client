import { useCallback, useEffect, useRef } from 'react';

const useOutsideClick = <T extends HTMLElement>(callback: () => void) => {
  const ref = useRef<T>(null);

  const handleClick = useCallback(
    ({ target }: MouseEvent) => {
      if (!ref.current || !target) return;

      if (ref.current.contains(target as Node)) return;

      callback();
    },
    [callback],
  );

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  return [ref] as const;
};

export default useOutsideClick;
