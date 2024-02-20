import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { IVideoProps } from 'types/videos';

import {
  getRecentVideos,
  getAllDummyVideos,
  createDummyVideoToMine,
} from '@/apis/videos';

import SearchYoutube from '@/components/Home/SearchYoutube';
import RecentVideos from '@/components/Home/RecentVideos';
import InsightVideos from '@/components/Home/InsightVideos';
import RecommendationModal from '@/components/modals/RecommendationModal';

import useCreateToast from '@/hooks/useCreateToast';
import useCreateVideo from '@/hooks/useCreateVideo';

import { HomePageContainer } from '@/styles/HomepageStyle';

import { userTokenState } from '@/stores/user';
import { recommendationModalState } from '@/stores/modal';
import { isSideBarOpenState } from '@/stores/ui';
import { modelingDataState } from '@/stores/model-controller';

const HomePage: React.FC = () => {
  const userToken = useRecoilValue(userTokenState);
  const isOpenModal = useRecoilValue(recommendationModalState);
  const setIsSideBarOpen = useSetRecoilState(isSideBarOpenState);
  const setModelingData = useSetRecoilState(modelingDataState);

  const [recentVideos, setRecentVideos] = useState<IVideoProps[]>([]);
  const [dummyVideos, setDummyVideos] = useState<IVideoProps[]>([]);

  const { createToast } = useCreateToast();
  const { createVideo } = useCreateVideo();

  const searchRef = useRef(null);

  const onFileClick = async (
    videoId: number,
    categoryId: number,
    categoryName?: string,
  ) => {
    const res = await createDummyVideoToMine(videoId, categoryId);
    if (res.isSuccess) {
      createToast(`[${categoryName}] 폴더에 저장되었어요`);

      await getAllDummyVideos().then((res) =>
        setDummyVideos(res.result.videos.slice(0, 9)),
      );
    }
  };

  useEffect(() => {
    userToken &&
      Promise.all([getRecentVideos(), getAllDummyVideos()]).then((res) => {
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

  useEffect(() => {
    if (userToken) {
      createVideo();
    } else {
      setModelingData(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userToken]);

  return (
    <>
      <HomePageContainer>
        <SearchYoutube searchRef={searchRef} />

        <div
          style={{
            display: 'flex',
            flexDirection: userToken ? 'column' : 'column-reverse',
            gap: 160,
            padding: '100px 0',
            borderRadius: '50px 50px 0 0',
            backgroundColor: 'white',
          }}
        >
          <RecentVideos searchRef={searchRef} videos={recentVideos} />
          <InsightVideos
            userToken={userToken}
            dummyVideos={dummyVideos}
            onFileClick={onFileClick}
          />
        </div>
      </HomePageContainer>

      {isOpenModal && <RecommendationModal />}
    </>
  );
};

export default HomePage;
