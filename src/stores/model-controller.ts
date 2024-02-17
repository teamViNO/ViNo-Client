import { atom } from 'recoil';

import { IVideo } from '@/models/video';

export const videoLinkState = atom<string | null>({
  key: 'video-link',
  default: null,
});

export const modelingProgressState = atom({
  key: 'modeling-progress',
  default: 0,
});

export const modelingErrorCodeState = atom<string | null>({
  key: 'modeling-error-code',
  default: null,
});

export const modelingDataState = atom<IVideo | null>({
  key: 'modeling-data',
  default: null,
});
