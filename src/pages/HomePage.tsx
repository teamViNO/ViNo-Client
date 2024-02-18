import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { IVideoProps } from 'types/videos';

import {
  getUnReadDummyVideos,
  getRecentVideos,
  getAllDummyVideos,
  createDummyVideoToMine,
} from '@/apis/videos';

import SearchYoutube from '@/components/Home/SearchYoutube';
import RecentVideos from '@/components/Home/RecentVideos';
import InsightVideos from '@/components/Home/InsightVideos';
import RecommendationModal from '@/components/modals/RecommendationModal';

import { HomePageContainer } from '@/styles/HomepageStyle';

import { userTokenState } from '@/stores/user';
import { recommendationModalState } from '@/stores/modal';
import { toastListState } from '@/stores/toast';
import { isSideBarOpenState } from '@/stores/ui';

export interface Video {
  id: string;
  title: string;
  subtitle: string;
  hashtags: string[];
  thumbnailUrl: string;
}

const HomePage: React.FC = () => {
  const userToken = useRecoilValue(userTokenState);
  const setIsSideBarOpen = useSetRecoilState(isSideBarOpenState);
  const isOpenModal = useRecoilValue(recommendationModalState);
  const [recentVideos, setRecentVideos] = useState<IVideoProps[]>([]);
  const [dummyVideos, setDummyVideos] = useState<IVideoProps[]>([]);
  const [toastList, setToastList] = useRecoilState(toastListState);

  const createToast = (content: string) => {
    setToastList([...toastList, { id: Date.now(), content }]);
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

    setIsSideBarOpen(false);
  }, [setIsSideBarOpen, userToken]);

  return (
    <>
      <HomePageContainer>
        <SearchYoutube searchRef={searchRef} />

        {userToken ? (
          <div>
            <RecentVideos searchRef={searchRef} videos={recentVideos} />
            <InsightVideos
              userToken={userToken}
              dummyVideos={dummyVideos}
              onFileClick={onFileClick}
            />
          </div>
        ) : (
          <div>
            <InsightVideos
              userToken={userToken}
              dummyVideos={dummyVideos}
              onFileClick={onFileClick}
            />
            <RecentVideos searchRef={searchRef} videos={recentVideos} />
          </div>
        )}
      </HomePageContainer>

      {isOpenModal && <RecommendationModal />}
    </>
  );
};

export default HomePage;
