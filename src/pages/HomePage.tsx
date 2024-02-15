import React, { useEffect, useState } from 'react';
import SearchYoutube from '@/components/Home/SearchYoutube';
import { HomePageContainer } from '@/styles/HomepageStyle';
import RecentVideos from '@/components/Home/RecentVideos';
import InsightVideos from '@/components/Home/InsightVideos';
import { useRecoilValue } from 'recoil';
import { recommendationModalState } from '@/stores/modal';
import RecommendationModal from '@/components/modals/RecommendationModal';
import { getDummyVideos, getRecentVideos } from '@/apis/videos';
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
  const [recentVideos, setRecentVideos] = useState<IVideoProps[]>([]);
  const [dummyVideos, setDummyVideos] = useState<IVideoProps[]>([]);
  const handleSearch = (value: string) => {
    console.log(value);
  };

  const isModalOpen = useRecoilValue(recommendationModalState);

  useEffect(() => {
    Promise.all([getRecentVideos(), getDummyVideos()]).then((res) => {
      const [recentVideosResponse, dummyVideosResponse] = res;
      setRecentVideos(recentVideosResponse.result.videos);
      setDummyVideos(dummyVideosResponse.result.videos);
    });
  }, [userToken]);

  return (
    <HomePageContainer>
      <SearchYoutube onSearch={handleSearch} />
      {isModalOpen && <RecommendationModal />}
      <RecentVideos videos={recentVideos} />
      <InsightVideos
        username="여울"
        popularHashtags={['디자인', '진로', '브랜딩']}
        dummyVideos={dummyVideos}
        setDummyVideos={setDummyVideos}
      />
    </HomePageContainer>
  );
};

export default HomePage;
