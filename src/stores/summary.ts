import { atom } from 'recoil';

import { IVideo } from '@/models/video';

export const summaryVideoState = atom<IVideo | null>({
  key: 'summary-video',
  default: null,
});

export const summaryFindKeywordCountState = atom({
  key: 'summary-find-keyword-count',
  default: 0,
});

export const summarySearchIndexState = atom({
  key: 'summarh-search-index',
  default: 0,
});
