import React from 'react'
import { RecentVideosContainer, VideoButton, VideosSubtitle, VideosTitle } from '@/styles/HomepageStyle';

// interface Video {
//   id: string;
//   title: string;
//   thumbnailUrl: string; 
// }

const RecentVideos: React.FC = () => {
  return (
    <RecentVideosContainer>
      {/* <Empty-Video Image></Empty-Video> */}
      <VideosTitle>최근 읽은 영상</VideosTitle>
      <VideosSubtitle>
        처음 방문하셨나요? <br /> 아직 정리해본 영상이 없어요!
      </VideosSubtitle>
      <VideoButton>영상 정리해보기</VideoButton>
    </RecentVideosContainer>
  );
};

export default RecentVideos;