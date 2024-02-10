import { atom } from 'recoil';
import { IFolderProps } from 'types/category';

export const categoryState = atom<IFolderProps[]>({
  key: 'category',
  default: [],
});
