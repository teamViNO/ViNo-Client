import { toastListState } from '@/stores/toast';
import { useRecoilState } from 'recoil';

const useCreateToast = () => {
  const [toastList, setToastList] = useRecoilState(toastListState);

  const createToast = (content: string) => {
    setToastList([...toastList, { id: Date.now(), content }]);
  };
  return { createToast };
};

export default useCreateToast;
