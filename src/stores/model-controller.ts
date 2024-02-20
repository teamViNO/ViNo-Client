import { atom } from 'recoil';

import { ModelingFinalData, ModelingStatus } from '@/models/modeling';

import localStorageEffect from './effects/localStorageEffect';

export const videoLinkState = atom<string | null>({
  key: 'video-link',
  default: null,
});

export const modelingProgressState = atom({
  key: 'modeling-progress',
  default: 0,
});

export const modelingStatusState = atom<ModelingStatus>({
  key: 'modeling-status',
  default: 'NONE',
});

export const modelingDataState = atom<ModelingFinalData | null>({
  key: 'modeling-data',
  default: null,
  effects_UNSTABLE: [localStorageEffect],
});
