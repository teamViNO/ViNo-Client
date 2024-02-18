import React, { useEffect, useRef, useState } from 'react';
import SearchYoutube from '@/components/Home/SearchYoutube';
import { HomePageContainer } from '@/styles/HomepageStyle';
import RecentVideos from '@/components/Home/RecentVideos';
import InsightVideos from '@/components/Home/InsightVideos';
import { useRecoilState, useRecoilValue } from 'recoil';
import { recommendationModalState } from '@/stores/modal';
import RecommendationModal from '@/components/modals/RecommendationModal';
import {
  getUnReadDummyVideos,
  getRecentVideos,
  getAllDummyVideos,
  createDummyVideoToMine,
} from '@/apis/videos';
import { userTokenState } from '@/stores/user';
import { IVideoProps } from 'types/videos';
import { toastListState } from '@/stores/toast';

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
  const [toastList, setToastList] = useRecoilState(toastListState);

  const createToast = (content: string) => {
    setToastList([...toastList, { id: Date.now(), content }]);
  };
  const handleSearch = (value: string) => {
    console.log(value);
  };

  const onFileClick = async (
    videoId: number,
    categoryId: number,
    categoryName?: string,
  ) => {
    const res = await createDummyVideoToMine(videoId, categoryId);
    if (res.isSuccess) {
      createToast(`[${categoryName}] 폴더에 저장되었어요`);

      await getUnReadDummyVideos().then((res) =>
        setDummyVideos(res.result.videos.slice(0, 9)),
      );
    }
  };
  const searchRef = useRef(null);

  const isModalOpen = useRecoilValue(recommendationModalState);

  useEffect(() => {
    userToken &&
      Promise.all([getRecentVideos(), getUnReadDummyVideos()]).then((res) => {
        const [recentVideosResponse, dummyVideosResponse] = res;
        setRecentVideos(recentVideosResponse.result.videos);
        setDummyVideos(dummyVideosResponse.result.videos.slice(0, 9));
      });

    !userToken &&
      getAllDummyVideos().then((res) => {
        setRecentVideos([]);
        setDummyVideos(res.result.videos);
      });
  }, [userToken]);

  return (
    <HomePageContainer>
      <SearchYoutube searchRef={searchRef} onSearch={handleSearch} />
      {isModalOpen && <RecommendationModal />}
      {userToken && (
        <>
          <RecentVideos searchRef={searchRef} videos={recentVideos} />
          <InsightVideos
            userToken={userToken}
            dummyVideos={dummyVideos}
            onFileClick={onFileClick}
          />
        </>
      )}
      {!userToken && (
        <>
          <InsightVideos
            userToken={userToken}
            dummyVideos={dummyVideos}
            onFileClick={onFileClick}
          />
          <RecentVideos searchRef={searchRef} videos={recentVideos} />
        </>
      )}
    </HomePageContainer>
  );
};

export default HomePage;
