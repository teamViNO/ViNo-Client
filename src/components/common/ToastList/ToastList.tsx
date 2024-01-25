import { useRecoilValue } from 'recoil';

import { toastListState } from '@/stores/toast';

import ToastItem from './ToastItem';
import { Container } from './style';

const ToastList = () => {
  const toastList = useRecoilValue(toastListState);

  return (
    <Container>
      {toastList.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </Container>
  );
};

export default ToastList;
