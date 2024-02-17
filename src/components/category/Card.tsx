import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { IVideoProps } from 'types/videos';

import { CategorySelectBox } from '@/components/SummaryPage/SummaryDetailBox/CategorySelectBox';

import { categoryState } from '@/stores/category';

import * as CardStyles from '@/styles/category/Card.style';
import Chip from '../common/chip/Chip';

interface ICardProps {
  mode: 'default' | 'category' | 'recommend';
  video: IVideoProps;
  checkedVideos?: number[];
  setCheckedVideos?: (value: number[]) => void;
  onFileClick?: (
    videoId: number,
    categoryId: number,
    categoryName?: string,
  ) => void;
}

const Card: React.FC<ICardProps> = ({
  mode = 'default',
  video,
  checkedVideos,
  setCheckedVideos,
  onFileClick,
}) => {
  const category = useRecoilValue(categoryState);

  const [selectedCategoryId, setSelectedCategoryId] = useState(
    category.length ? category[0].categoryId : -1,
  );

  const onFileClickWithProps = (categoryId: number, categoryName?: string) => {
    setSelectedCategoryId(categoryId);
    onFileClick && onFileClick(video.video_id, categoryId, categoryName);
  };

  const handleCheckBox = (videoId: number) => {
    if (checkedVideos!.includes(videoId)) {
      setCheckedVideos!(checkedVideos!.filter((id) => id !== videoId));
    } else {
      setCheckedVideos!([...checkedVideos!, videoId]);
    }
  };
  return (
    <CardStyles.Wrap mode={mode}>
      <div style={{ display: 'flex' }}>
        <CardStyles.Image src={video.image} alt="카드 이미지" />
        {mode === 'category' && (
          <CardStyles.CheckBoxWrap
            className={checkedVideos!.length > 0 ? 'activated' : ''}
          >
            <CardStyles.CheckBox
              type="checkbox"
              checked={checkedVideos!.includes(video.video_id)}
              onChange={() => handleCheckBox(video.video_id)}
            />
          </CardStyles.CheckBoxWrap>
        )}
      </div>

      <CardStyles.Content to={`/summary/${video.video_id}`}>
        <CardStyles.Title>{video.title}</CardStyles.Title>
        <CardStyles.Summary>{video.description}</CardStyles.Summary>
        <CardStyles.ChipWrap>
          {video.tag.slice(0, 2).map((tag) => (
            <Chip key={tag.name} name={tag.name} />
          ))}
        </CardStyles.ChipWrap>
      </CardStyles.Content>
      {mode === 'recommend' && (
        <CardStyles.DropdownWrap>
          <CategorySelectBox
            selectedCategoryId={selectedCategoryId}
            onSelect={onFileClickWithProps}
          />
        </CardStyles.DropdownWrap>
      )}
    </CardStyles.Wrap>
  );
};

export default Card;
