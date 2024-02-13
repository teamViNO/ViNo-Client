import React, { useEffect } from 'react';
import * as CardStyles from '@/styles/category/Card.style';
import VideoTag from '../common/videoTag';

export interface IVideoProps {
  video_id: number;
  category_id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  created_at: string;
  youtube_created_at: string;
  tag: [{ name: string }];
}

interface ICardProps {
  videos: IVideoProps[];
  checkedVideos: number[];
  setCheckedVideos: (value: number[]) => void;
}

const Card: React.FC<ICardProps> = ({
  videos,
  checkedVideos,
  setCheckedVideos,
}) => {
  useEffect(() => {}, [checkedVideos]);

  const handleCheckBox = (videoId: number) => {
    if (checkedVideos.includes(videoId)) {
      setCheckedVideos(checkedVideos.filter((id) => id !== videoId));
    } else {
      setCheckedVideos([...checkedVideos, videoId]);
    }
  };
  return (
    <CardStyles.Container>
      {videos.map((video) => (
        <CardStyles.Wrap key={`${video.title}-wrap`}>
          <CardStyles.Image source={video.image}>
            <CardStyles.CheckBoxWrap
              className={checkedVideos.length > 0 ? 'activated' : ''}
            >
              <CardStyles.CheckBox
                type="checkbox"
                checked={checkedVideos.includes(video.video_id)}
                onChange={() => handleCheckBox(video.video_id)}
              />
            </CardStyles.CheckBoxWrap>
          </CardStyles.Image>

          <CardStyles.Content
            to={`/summary/${video.video_id}`}
            key={`${video.title}-card-content`}
          >
            <CardStyles.Title key={`${video.title}`}>
              {video.title}
            </CardStyles.Title>
            <CardStyles.Summary key={`${video.description}`}>
              {video.description}
            </CardStyles.Summary>
            <CardStyles.ChipWrap key={`${video.title}-chip-wrap`}>
              {video.tag.map((tag) => (
                <VideoTag
                  content={`# ${tag.name}`}
                  color={'gray400'}
                  typography="Caption1"
                  key={`${video.title}-${tag.name}`}
                />
              ))}
            </CardStyles.ChipWrap>
          </CardStyles.Content>
        </CardStyles.Wrap>
      ))}
    </CardStyles.Container>
  );
};

export default Card;
