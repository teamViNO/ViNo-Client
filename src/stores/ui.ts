import { atom } from 'recoil';

import localStorageEffect from './effects/localStorageEffect';

export const summaryBoxWidthState = atom({
  key: 'summary-box-width',
  default: 865,
  effects_UNSTABLE: [localStorageEffect],
});

export const summarySearchIsOpenState = atom({
  key: 'summary-search-is-open',
  default: false,
});

export const isSideBarOpenState = atom({
  key: 'side-bar-is-open',
  default: false,
  effects_UNSTABLE: [localStorageEffect],
});
