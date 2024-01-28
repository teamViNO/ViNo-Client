import { atom } from 'recoil';

export interface IToast {
  id: number; // Date.now()
  content: JSX.Element | JSX.Element[] | string;
}

export const toastListState = atom<IToast[]>({
  key: 'toast-list',
  default: [],
});

// example: { id: Date.now(), content: '단어 변경이 완료되었어요!' }
