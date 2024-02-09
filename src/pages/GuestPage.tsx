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

const GuestPage: React.FC = () => {
  const handleSearch = (value: string) => {
    console.log(value);
  };

  return (
    <HomePageContainer>
      <SearchYoutube onSearch={handleSearch} />
      <InsightVideos username="여울" popularHashtags={['디자인', '진로', '브랜딩']} />
      <RecentVideos />
    </HomePageContainer>
  );
};

export default GuestPage;