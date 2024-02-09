import { atom } from 'recoil';

import localStorageEffect from './effects/localStorageEffect';

export const userTokenState = atom<string | null>({
  key: 'user-token',
  default: null,
  effects_UNSTABLE: [localStorageEffect],
});
