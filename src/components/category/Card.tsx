import React, { useState } from 'react';
import * as CardStyles from '@/styles/category/Card.style';
import VideoTag from '../common/videoTag';
import { IVideoProps } from 'types/videos';
import { CategorySelectBox } from '../SummaryPage/SummaryDetailBox/CategorySelectBox';

interface ICardProps {
  mode: 'default' | 'category' | 'recommend';
  video: IVideoProps;
  checkedVideos: number[];
  setCheckedVideos: (value: number[]) => void;
}

const Card: React.FC<ICardProps> = ({
  mode = 'default',
  video,
  checkedVideos,
  setCheckedVideos,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckBox = (videoId: number) => {
    if (checkedVideos.includes(videoId)) {
      setCheckedVideos(checkedVideos.filter((id) => id !== videoId));
    } else {
      setCheckedVideos([...checkedVideos, videoId]);
    }
  };
  return (
    <CardStyles.Wrap
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <CardStyles.Image source={video.image}>
        {mode === 'category' && (
          <CardStyles.CheckBoxWrap
            className={checkedVideos.length > 0 ? 'activated' : ''}
          >
            <CardStyles.CheckBox
              type="checkbox"
              checked={checkedVideos.includes(video.video_id)}
              onChange={() => handleCheckBox(video.video_id)}
            />
          </CardStyles.CheckBoxWrap>
        )}
      </CardStyles.Image>

      <CardStyles.Content to={`/summary/${video.video_id}`}>
        <CardStyles.Title>{video.title}</CardStyles.Title>
        <CardStyles.Summary>{video.description}</CardStyles.Summary>
        <CardStyles.ChipWrap>
          {video.tag.map((tag) => (
            <VideoTag
              content={`# ${tag.name}`}
              color={'gray400'}
              typography="Caption1"
              key={tag.name}
            />
          ))}
        </CardStyles.ChipWrap>
      </CardStyles.Content>
      {isOpen && (
        <CardStyles.DropdownWrap>
          <CategorySelectBox />
        </CardStyles.DropdownWrap>
      )}
    </CardStyles.Wrap>
  );
};

export default Card;
