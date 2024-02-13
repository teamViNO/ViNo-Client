import React, { useEffect, useState } from 'react';
import SearchYoutube from '@/components/Home/SearchYoutube';
import { HomePageContainer } from '@/styles/HomepageStyle';
import RecentVideos from '@/components/Home/RecentVideos';
import InsightVideos from '@/components/Home/InsightVideos';
import { useRecoilValue } from 'recoil';
import { recommendationModalState } from '@/stores/modal';
import RecommendationModal from '@/components/modals/RecommendationModal';
import { getRecentVideos } from '@/apis/videos';
import { userTokenState } from '@/stores/user';
import { IVideoProps } from 'types/videos';

export interface Video {
  id: string;
  title: string;
  subtitle: string;
  hashtags: string[];
  thumbnailUrl: string;
}

const HomePage: React.FC = () => {
  const userToken = useRecoilValue(userTokenState);
  const [videos, setVideos] = useState<IVideoProps[]>([]);
  const handleSearch = (value: string) => {
    console.log(value);
  };

  const isModalOpen = useRecoilValue(recommendationModalState);

  useEffect(() => {
    userToken &&
      getRecentVideos()
        .then((res) => setVideos(res.result.videos))
        .catch((err) => console.log(err));
  }, [userToken]);

  return (
    <HomePageContainer>
      <SearchYoutube onSearch={handleSearch} />
      {isModalOpen && <RecommendationModal />}
      <RecentVideos videos={videos} />
      <InsightVideos
        username="여울"
        popularHashtags={['디자인', '진로', '브랜딩']}
      />
    </HomePageContainer>
  );
};

export default HomePage;
