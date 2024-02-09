import { APIResponse } from '@/models/config/axios';
import { IVideo, VideoVersionType } from '@/models/video';

import axios from './config/instance';

const PREFIX = '/videos';

export const getVideoAPI = (
  videoId: string | number,
  versionId: VideoVersionType = 'revision',
) => {
  return axios.get<APIResponse<IVideo>>(PREFIX + `/${videoId}/${versionId}`);
};
