import { IVideoProps } from 'types/videos';

export const sortVideos = (
  videos: IVideoProps[] | undefined,
  isRecentRegisterMode: boolean,
) => {
  const sortedVideos = videos?.sort((prevVideo, nextVideo) => {
    if (
      prevVideo[isRecentRegisterMode ? 'created_at' : 'youtube_created_at'] >
      nextVideo[isRecentRegisterMode ? 'created_at' : 'youtube_created_at']
    )
      return -1;
    if (
      prevVideo[isRecentRegisterMode ? 'created_at' : 'youtube_created_at'] ===
      nextVideo[isRecentRegisterMode ? 'created_at' : 'youtube_created_at']
    )
      return 0;
    return 1;
  });
  return sortedVideos;
};
