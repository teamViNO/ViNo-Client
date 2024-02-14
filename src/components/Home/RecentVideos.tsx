import {
  RecentVideosContainer,
  VideoButton,
  VideosSubtitle,
  VideosTitle,
} from '@/styles/HomepageStyle';
import CardImage from '@/assets/empty-video.png';
import { CardContainer } from '@/styles/category/Card.style';
import Card from '../category/Card';
import { IVideoProps } from 'types/videos';

interface IRecentVideosProp {
  videos: IVideoProps[];
}

const RecentVideos = ({ videos }: IRecentVideosProp) => {
  return (
    <RecentVideosContainer>
      <div className="container">
        <VideosTitle>최근 읽은 영상</VideosTitle>

        {videos.length === 0 && (
          <div className="empty-container">
            <div className="empty-video">
              <img src={CardImage} alt="비어있는 비디오 이미지" />
            </div>
            <VideosSubtitle>
              처음 방문하셨나요? <br /> 아직 정리해본 영상이 없어요!
            </VideosSubtitle>
            <VideoButton>
              <h2 className="button-text">영상 정리해보기</h2>
            </VideoButton>
          </div>
        )}
        {videos.length > 0 && (
          <CardContainer>
            {videos.map((video) => (
              <Card key={video.category_id} mode="default" video={video} />
            ))}
          </CardContainer>
        )}
      </div>
    </RecentVideosContainer>
  );
};

export default RecentVideos;
