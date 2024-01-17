import React from 'react';
import SearchYoutube from '@/components/Home/SearchYoutube';
import {
  HomePageContainer, Title, Subtitle 
} from '@/styles/HomepageStyle';

const HomePage: React.FC = () => {
  const handleSearch = (value: string) => {
    console.log(value);
  };

  return (
    <HomePageContainer>
      <Title>어떤 영상을 정리해볼까요?</Title>
      <Subtitle>영상에서 글로 변환하고 싶은 YouTube 영상의 링크를 붙여넣어주세요</Subtitle>
      <SearchYoutube onSearch={handleSearch} />
    </HomePageContainer>
  );
};

export default HomePage;