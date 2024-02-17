import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { IVideoProps } from 'types/videos';

import {
  getUnReadDummyVideos,
  getRecentVideos,
  getAllDummyVideos,
} from '@/apis/videos';

import SearchYoutube from '@/components/Home/SearchYoutube';
import RecentVideos from '@/components/Home/RecentVideos';
import InsightVideos from '@/components/Home/InsightVideos';
import RecommendationModal from '@/components/modals/RecommendationModal';

import { HomePageContainer } from '@/styles/HomepageStyle';

import { userTokenState } from '@/stores/user';

export interface Video {
  id: string;
  title: string;
  subtitle: string;
  hashtags: string[];
  thumbnailUrl: string;
}

const HomePage: React.FC = () => {
  const searchRef = useRef(null);
  const userToken = useRecoilValue(userTokenState);
  const [recentVideos, setRecentVideos] = useState<IVideoProps[]>([]);
  const [dummyVideos, setDummyVideos] = useState<IVideoProps[]>([]);

  useEffect(() => {
    userToken &&
      Promise.all([getRecentVideos(), getUnReadDummyVideos()]).then((res) => {
        const [recentVideosResponse, dummyVideosResponse] = res;
        setRecentVideos(recentVideosResponse.result.videos);
        setDummyVideos(dummyVideosResponse.result.videos);
      });

    !userToken &&
      getAllDummyVideos().then((res) => {
        setRecentVideos([]);
        setDummyVideos(res.result.videos);
      });
  }, [userToken]);

  return (
    <HomePageContainer>
      <SearchYoutube searchRef={searchRef} />

      <div style={{ flexDirection: userToken ? 'column' : 'column-reverse' }}>
        <RecentVideos searchRef={searchRef} videos={recentVideos} />
        <InsightVideos
          userToken={userToken}
          dummyVideos={dummyVideos}
          setDummyVideos={setDummyVideos}
        />
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
