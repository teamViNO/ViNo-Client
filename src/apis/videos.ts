import { APIBaseResponse, APIResponse } from '@/models/config/axios';
import {
  IVideo,
  UpdateVideoCategoryRequest,
  UpdateVideoRequest,
  VideoResponse,
  VideoVersionType,
} from '@/models/video';

import axios from './config/instance';
import axiosInstance from './config/instance';
import { IVideoProps } from 'types/videos';

const PREFIX = '/videos';

export const createVideoAPI = (data: IVideo) => {
  return axios.post<APIResponse<IVideo>>(PREFIX + `/new-video`, data);
};

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
  videoId: string,
): Promise<APIResponse<Record<'videos', IVideoProps[]>>> => {
  const response = await axiosInstance.get(`/videos/${videoId}/get`);
  return response.data;
};

export const updateVideoAPI = (
  videoId: string | number,
  data: UpdateVideoRequest,
) => {
  return axios.patch<APIResponse<IVideo>>(PREFIX + `/${videoId}`, data);
};

export const updateVideoCategoryIdAPI = (
  categoryId: number,
  data: UpdateVideoCategoryRequest,
) => {
  return axios.patch<APIResponse<IVideo>>(
    PREFIX + `/${categoryId}/update`,
    data,
  );
};

export const createVideoSummaryAPI = (videoId: number, content: string[]) => {
  return axios.post<APIBaseResponse>(PREFIX + `/${videoId}/newSummary`, {
    content,
  });
};

export const deleteVideoSummaryAPI = (summaryId: number) => {
  return axios.delete<APIBaseResponse>(PREFIX + `/${summaryId}/deleteSummary`);
};

export const getUnReadDummyVideosAPI = () => {
  return axios.get<APIResponse<VideoResponse>>('/videos/dummyVideos/unRead');
};

export const getUnReadDummyVideos = async (): Promise<
  APIResponse<Record<'videos', IVideoProps[]>>
> => {
  const response = await axiosInstance.get('/videos/dummyVideos/unRead');
  return response.data;
};

export const getAllDummyVideos = async (): Promise<
  APIResponse<Record<'videos', IVideoProps[]>>
> => {
  const response = await axios.get('/videos/dummyVideos');
  return response.data;
};

export const createDummyVideoToMine = async (
  videoId: number,
  categoryId: number,
) => {
  const response = await axiosInstance.post(
    `/videos/dummyVideos/${videoId}/${categoryId}/newVideo`,
  );

  return response.data;
};

export const getVideoModeling = async (url: string) => {
  const response = await axiosInstance.get(`/video/?v=${url}`);
  console.log(response);
  return response.data;
};
