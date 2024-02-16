import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { IToast, toastListState } from '@/stores/toast';

type Props = {
  toast: IToast;
};

const ToastItem = ({ toast }: Props) => {
  const setList = useSetRecoilState(toastListState);
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    const removeTimer = setTimeout(() => {
      setList((list) => list.filter((item) => item.id !== toast.id));
    }, 1000 * 3);

    const hideTimer = setTimeout(() => {
      setIsShow(false);
    }, 1000 * 2.5);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`toast ${isShow ? 'show' : 'hide'}`}>{toast.content}</div>
  );
};

export default ToastItem;
