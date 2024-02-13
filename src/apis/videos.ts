import { APIResponse } from '@/models/config/axios';
import { IVideo, VideoVersionType } from '@/models/video';

import axios from './config/instance';
import axiosInstance from './config/instance';

const PREFIX = '/videos';

export const getVideoAPI = (
  videoId: string | number,
  versionId: VideoVersionType = 'revision',
) => {
  return axios.get<APIResponse<IVideo>>(PREFIX + `/${videoId}/${versionId}`);
};

export const deleteVideos = async (videos: number[]) => {
  const response = await axiosInstance.delete('/videos/selectDelete', {
    data: { videos },
  });
  return response.data;
};
