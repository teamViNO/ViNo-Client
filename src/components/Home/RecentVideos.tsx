import React from 'react'
import { RecentVideosContainer, VideoButton, VideosSubtitle, VideosTitle } from '@/styles/HomepageStyle';
import Card from '../category/Card';

const RecentVideos: React.FC = () => {
  return (
    <RecentVideosContainer>
      <div className='container'>
        <VideosTitle>최근 읽은 영상</VideosTitle>

        {/* 영상 개수 0개일 때  */}
        <>
          <div className='empty-video'>
            <img src='/src/assets/empty-video.png' alt='비어있는 비디오 이미지' />
          </div>
          <VideosSubtitle>
            처음 방문하셨나요? <br /> 아직 정리해본 영상이 없어요!
          </VideosSubtitle>
          <VideoButton>
            <h2 className='button-text'>영상 정리해보기</h2>
          </VideoButton>
        </>

        {/* 영상 개수 3개 이하일 때  */}

        {/* 영상 개수 4개 이상일 때 '더보기 버튼' 활성화 & 전체 카드 모두 보여짐 */}
       
      </div>
    </RecentVideosContainer>
  );
};

export default RecentVideos;
