import { atom } from 'recoil';

import localStorageEffect from './effects/localStorageEffect';

export const userState = atom({
  key: 'user',
  default: true,
});

export const userTokenState = atom<string | null>({
  key: 'user-token',
  default: null,
  effects_UNSTABLE: [localStorageEffect],
});
