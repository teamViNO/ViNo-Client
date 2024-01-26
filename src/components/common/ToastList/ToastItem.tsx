import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { IToast, toastListState } from '@/stores/toast';

type Props = {
  toast: IToast;
};

const ToastItem = ({ toast }: Props) => {
  const [list, setList] = useRecoilState(toastListState);
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    const removeTimer = setTimeout(() => {
      setList(list.filter((item) => item.id !== toast.id));
    }, 1000 * 4);

    const hideTimer = setTimeout(() => {
      setIsShow(false);
    }, 1000 * 3.5);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  });

  return (
    <div className={`toast ${isShow ? 'show' : 'hide'}`}>{toast.content}</div>
  );
};

export default ToastItem;
