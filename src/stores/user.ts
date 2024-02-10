import { atom } from 'recoil';

import { MyInfoResponse } from '@/models/user';

import localStorageEffect from './effects/localStorageEffect';

export const userInfoState = atom<MyInfoResponse | null>({
  key: 'user-info',
  default: null,
});

export const userTokenState = atom<string | null>({
  key: 'user-token',
  default: null,
  effects_UNSTABLE: [localStorageEffect],
});
