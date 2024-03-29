import { atom } from 'recoil';

import { IVideo } from '@/models/video';

export const summaryVideoState = atom<IVideo | null>({
  key: 'summary-video',
  default: null,
});

export const summaryUpdateVideoState = atom<IVideo | null>({
  key: 'summary-update-video',
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

export const summaryIsEditingViewState = atom({
  key: 'summary-is-editing-view',
  default: false,
});

export const summaryPlaySubHeadingIdState = atom({
  key: 'summary-play-subheading-id',
  default: -1,
});

export const summaryVideoTimeState = atom({
  key: 'summary-video-time',
  default: 0,
});
