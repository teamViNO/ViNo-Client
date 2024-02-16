import React, { useState, useEffect, useRef } from 'react';
import { InsightVideosContainer } from '@/styles/HomepageStyle';
import Card from '../category/Card';
import { IVideoProps } from 'types/videos';
import { CardContainer } from '@/styles/category/Card.style';
import successImg from '@/assets/success.png';
import { createDummyVideoToMine, getUnReadDummyVideos } from '@/apis/videos';

interface InsightVideosProps {
  userToken: string | null;
  dummyVideos: IVideoProps[];
  setDummyVideos: React.Dispatch<React.SetStateAction<IVideoProps[]>>;
}

const InsightVideos: React.FC<InsightVideosProps> = ({
  userToken,
  dummyVideos,
  setDummyVideos,
}) => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [showEndMessage, setShowEndMessage] = useState(false);

  const endBox = useRef<HTMLDivElement>(null);

  const onFileClick = async (videoId: number, categoryId: number) => {
    const res = await createDummyVideoToMine(videoId, categoryId);
    if (res.isSuccess)
      await getUnReadDummyVideos().then((res) =>
        setDummyVideos(res.result.videos),
      );
  };

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowEndMessage(true);
          const timer: NodeJS.Timeout = setTimeout(() => {
            setShowEndMessage(false);
            clearTimeout(timer);
          }, 2000);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 1.0,
    });

    const endBoxElement = endBox.current;
    if (endBoxElement && userToken) {
      observer.observe(endBoxElement);
    }

    return () => {
      if (endBoxElement) {
        observer.unobserve(endBoxElement);
      }
    };
  }, [userToken]);

  return (
    <InsightVideosContainer>
      <div className="insight-container">
        <div className="text-container">
          <h2 className="insight-title">이런 인사이트는 어때요?</h2>
          <h4 className="insight-subtitle">
            최근 사용자들이 많이 찾은 콘텐츠들을 소개해드려요
          </h4>
        </div>
        <CardContainer>
          {dummyVideos.map((video) => (
            <Card
              mode="recommend"
              video={video}
              checkedVideos={checkedItems}
              setCheckedVideos={setCheckedItems}
              onFileClick={onFileClick}
              key={video.video_id}
            />
          ))}
        </CardContainer>
        <div ref={endBox} className="end-message">
          <div
            className="end-wrapper"
            style={{ display: showEndMessage ? 'block' : 'none' }}
          >
            <img
              src={successImg}
              alt="successImg"
              width={87.11}
              height={87.11}
            />
            <h4 className="end-text">
              마지막 영상이에요!
              <br />더 많은 영상 변환하러 가볼까요?
            </h4>
          </div>
        </div>
      </div>
    </InsightVideosContainer>
  );
};

export default InsightVideos;
