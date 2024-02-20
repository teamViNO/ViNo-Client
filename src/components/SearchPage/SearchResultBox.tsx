import { IVideo } from '@/models/search';
import Styled from '@/styles/SearchResult';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { userInfoState } from '@/stores/user';
import { useRecoilValue } from 'recoil';

interface SearchResultProp {
  video: IVideo;
  tags: string[];
}

const SearchResultBox: React.FC<SearchResultProp> = ({ video, tags }) => {
  const nav = useNavigate();
  const userName = useRecoilValue(userInfoState);
  const date = video.created_at.toString().split('T')[0].split('-');
  const handleImg = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = event.target as HTMLImageElement;
    target.style.display = 'none';
  };
  const handleOnclick = () => {
    nav(`/summary/${video.video_id}?insight=${userName?.name === video.user}`);
  };

  return (
    <Styled.VideoCard
      style={{ width: '910px', height: '254px' }}
      onClick={handleOnclick}
    >
      <div className="main" style={{ width: '670px', height: '254px' }}>
        <div className="user" style={{ width: '114px', height: '20px' }}>
          <span className="userName" style={{ height: '19px' }}>
            {video.user}
          </span>
          <span
            className="contour"
            style={{ width: '0px', height: '12px' }}
          ></span>
          <span className="userDate" style={{ height: '19px' }}>
            {`${date[0]}년 ${date[1]}월 ${date[2]}일`}
          </span>
        </div>
        <div className="content" style={{ width: '648px', height: '108px' }}>
          <div
            className="title"
            style={{ width: '648px', height: '26px' }}
            dangerouslySetInnerHTML={{ __html: video.title }}
          ></div>
          <div
            className="subtitle"
            style={{ width: '648px', height: '22px' }}
            dangerouslySetInnerHTML={{ __html: video.description }}
          ></div>
          <div
            className="subcontent"
            style={{ width: '648px', height: '44px' }}
            dangerouslySetInnerHTML={{ __html: video.content }}
          ></div>
        </div>
        <div className="hashtag" style={{ maxWidth: '648px', height: '31px' }}>
          {video.tag.map((item, index) => (
            <Styled.hashtagBox
              key={index}
              style={{
                backgroundColor: tags.includes(`#${item.name}`)
                  ? '#E9FF3F'
                  : '',
              }}
            >
              # {item.name}
            </Styled.hashtagBox>
          ))}
        </div>
      </div>
      <div className="imgBox">
        <img src={video.image} onError={(event) => handleImg(event)}></img>
      </div>
    </Styled.VideoCard>
  );
};

export default SearchResultBox;
