import { atom } from 'recoil';

export const addCategoryModalState = atom({
  key: 'addCategoryModal',
  default: { location: '', isOpen: false, categoryId: -1 },
});

export const guestCategoryModalState = atom({
  key: 'guest-category-modal',
  default: false,
});

export const summaryTransformModalState = atom({
  key: 'summary-transform-modal',
  default: false,
});

export const recommendationModalState = atom({
  key: 'recommendation-modal',
  default: false,
});

export const errorModalState = atom({
  key: 'error-modal',
  default: false,
});
