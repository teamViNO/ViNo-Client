import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { getUnReadDummyVideosAPI } from '@/apis/videos';

import CloseIcon from '@/assets/icons/close.svg?react';
import TransformationIcon from '@/assets/icons/transformation.svg?react';

import useOutsideClick from '@/hooks/useOutsideClick';

import { IVideo } from '@/models/video';

import { recommendationModalState } from '@/stores/modal';

import { RecommendationModalContainer } from '@/styles/modals/RecommendationModal.style';

const RecommendationModal = () => {
  const setIsOpenModal = useSetRecoilState(recommendationModalState);
  const [dummyVideo, setDummyVideo] = useState<IVideo>();

  const [modalRef] = useOutsideClick<HTMLDivElement>(() =>
    setIsOpenModal(false),
  );

  useEffect(() => {
    const callAPI = async () => {
      try {
        const { videos } = (await getUnReadDummyVideosAPI()).data.result;
        const random = Math.round(Math.random() * (videos.length - 1));

        setDummyVideo(videos[random]);
      } catch (e) {
        console.error(e);
      }
    };

    callAPI();
  }, [setDummyVideo]);

  return (
    <RecommendationModalContainer>
      <div className="container" ref={modalRef}>
        <div className="inform">
          <div className="close-btn" onClick={() => setIsOpenModal(false)}>
            <CloseIcon width={28} height={28} />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div className="inform-icon">
              <TransformationIcon width={60} height={60} />
            </div>

            <div className="inform-text">잠깐! 새로고침은 안돼요!</div>

            <div className="inform-subtext">
              새로고침 시 영상변환이 초기화되니 유의해주세요
            </div>
          </div>
        </div>

        {dummyVideo && (
          <div className="insight">
            <div className="insight-text">
              기다리는 동안 이런 영상은 어때요?
            </div>

            <Link
              className="insight-card"
              to={`/summary/${dummyVideo.video_id}`}
            >
              <img src={dummyVideo.image} alt="thumbnail" />

              <div className="insight-content">
                <h1>{dummyVideo.title}</h1>

                <div style={{ display: 'flex', gap: 8 }}>
                  {dummyVideo.tag.slice(0, 3).map((item) => (
                    <div key={item.name} className="insight-tag">
                      # {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </RecommendationModalContainer>
  );
};

export default RecommendationModal;
