import { atom } from 'recoil';

export const topCategoryModalState = atom({
  key: 'topCategoryModal',
  default: false,
});

export const summaryTransformModalState = atom({
  key: 'summary-transform-modal',
  default: false,
});

export const recommendationModalState = atom({
    key: 'recommendationModal',
    default: false,
});