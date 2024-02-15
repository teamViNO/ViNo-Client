import { useCallback, useEffect, useRef, useState } from 'react';

const useFocus = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [isFocus, setIsFocus] = useState(false);

  const focus = useCallback(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);

  const handleFocus = () => setIsFocus(true);
  const handleBlur = () => setIsFocus(false);

  useEffect(() => {
    const element = ref.current;

    element?.addEventListener('focus', handleFocus);
    element?.addEventListener('blur', handleBlur);

    return () => {
      element?.removeEventListener('focus', handleFocus);
      element?.removeEventListener('blur', handleBlur);
    };
  }, [ref]);

  return [ref, focus, isFocus] as const;
};

export default useFocus;
