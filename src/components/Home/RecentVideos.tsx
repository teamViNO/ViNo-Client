import {
  RecentVideosContainer,
  VideoButton,
  VideosSubtitle,
  VideosTitle,
} from '@/styles/HomepageStyle';
import { Link } from 'react-router-dom';
import MoveIcon from '@/assets/icons/move.svg?react';
import CardImage from '@/assets/empty-video.png';
import { CardContainer } from '@/styles/category/Card.style';
import Card from '../category/Card';
import { IVideoProps } from 'types/videos';

interface IRecentVideosProp {
  videos: IVideoProps[];
  searchRef: React.RefObject<HTMLInputElement>;
}

const RecentVideos = ({ videos, searchRef }: IRecentVideosProp) => {
  return (
    <RecentVideosContainer>
      <div className="container">
        <div className="title-container">
          <VideosTitle>최근 읽은 영상</VideosTitle>
          {videos.length >= 3 && (
            <Link to="/category/recent" className="icon-wrapper">
              <MoveIcon width={28} height={28} />
            </Link>
          )}
        </div>

        {videos.length === 0 && (
          <div className="empty-container">
            <div className="empty-video">
              <img src={CardImage} alt="비어있는 비디오 이미지" />
            </div>
            <VideosSubtitle>
              처음 방문하셨나요? <br /> 아직 정리해본 영상이 없어요!
            </VideosSubtitle>
            <VideoButton
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <h2
                className="button-text"
                onClick={() => searchRef.current?.focus()}
              >
                영상 정리해보기
              </h2>
            </VideoButton>
          </div>
        )}
        {videos.length > 0 && (
          <CardContainer>
            {videos.slice(0, 3).map((video) => (
              <Card key={video.video_id} mode="default" video={video} />
            ))}
          </CardContainer>
        )}
      </div>
    </RecentVideosContainer>
  );
};

export default RecentVideos;
