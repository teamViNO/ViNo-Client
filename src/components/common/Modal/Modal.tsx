import { BlurBackground } from '@/styles/modals/common.style';
import { useCallback, useEffect } from 'react';

type Props = {
  children?: JSX.Element | JSX.Element[] | string;
  onClose: () => void;
};

const Modal = ({ children, onClose }: Props) => {
  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [handleKeydown]);

  return <BlurBackground>{children}</BlurBackground>;
};

export default Modal;
