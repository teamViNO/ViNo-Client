import { atom } from 'recoil';

import { IVideo } from '@/models/video';

export const summaryVideoState = atom<IVideo | null>({
  key: 'summary-video',
  default: null,
});
