import { APIResponse } from '@/models/config/axios';
import { IVideo, VideoVersionType } from '@/models/video';

import axios from './config/instance';
import axiosInstance from './config/instance';
import { IVideoProps } from 'types/videos';

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

export const getRecentVideos = async (): Promise<
  APIResponse<Record<'videos', IVideoProps[]>>
> => {
  const response = await axiosInstance.get('/videos/recent');
  return response.data;
};

export const getVideoById = async (
  videoId: number,
): Promise<APIResponse<Record<'videos', IVideoProps[]>>> => {
  const response = await axiosInstance.get(`/videos/${videoId}`);
  return response.data;
};
