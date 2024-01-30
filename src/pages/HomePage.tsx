import React from 'react';
import SearchYoutube from '@/components/Home/SearchYoutube';
import {
  HomePageContainer
} from '@/styles/HomepageStyle';
import RecentVideos from '@/components/Home/RecentVideos';
import InsightVideos from '@/components/Home/InsightVideos';

export interface Video {
  id: string;
  title: string;
  subtitle: string;
  hashtags: string[];
  thumbnailUrl: string; 
}

const HomePage: React.FC = () => {
  const handleSearch = (value: string) => {
    console.log(value);
  };

  // // 추천영상 0개
  // const dummyVideos: Video[] = [];

  // 추천영상 3개 이하
  const dummyVideos = [
    { id: '1', title: '우리는 카카오 워크로 일해요', subtitle: '카카오 워크의 업무환경 및 업무', hashtags: ['태그1', '태그2', '태그3'], thumbnailUrl: 'https://img.youtube.com/vi/wS66ZfISU4E/maxresdefault.jpg' },
    { id: '2', title: '어떤 브랜드가 살아남는가? | 인정받는 브랜드의 비밀', subtitle: '요약2', hashtags: ['태그1', '태그2', '태그3'], thumbnailUrl: 'https://img.youtube.com/vi/1JTcDyiLSUs/maxresdefault.jpg' }, 
  ];

  return (
    <HomePageContainer>
      <SearchYoutube onSearch={handleSearch} />
      <RecentVideos videos={dummyVideos} />
      <InsightVideos videos={dummyVideos} username="여울" popularHashtags={['디자인', '진로', '브랜딩']} />
    </HomePageContainer>
  );
};

export default HomePage;