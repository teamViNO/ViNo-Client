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
    e: React.MouseEvent,
    videoId: number,
    categoryId: number,
  ) => void;
}

const Card: React.FC<ICardProps> = ({
  mode = 'default',
  video,
  checkedVideos,
  setCheckedVideos,
  onFileClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const category = useRecoilValue(categoryState);

  const [selectedCategoryId, setSelectedCategoryId] = useState(
    category.length ? category[0].categoryId : -1,
  );

  const onFileClickWithProps = (e: React.MouseEvent) =>
    onFileClick && onFileClick(e, video.video_id, selectedCategoryId);

  const handleSelectCategory = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
  };

  const handleCheckBox = (videoId: number) => {
    if (checkedVideos!.includes(videoId)) {
      setCheckedVideos!(checkedVideos!.filter((id) => id !== videoId));
    } else {
      setCheckedVideos!([...checkedVideos!, videoId]);
    }
  };
  return (
    <CardStyles.Wrap
      mode={mode}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
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
          {video.tag.slice(0, 3).map((tag) => (
            <Chip key={tag.name} name={tag.name} />
          ))}
        </CardStyles.ChipWrap>
      </CardStyles.Content>
      {isOpen && mode === 'recommend' && (
        <CardStyles.DropdownWrap>
          <CategorySelectBox
            selectedCategoryId={selectedCategoryId}
            onSelect={handleSelectCategory}
            onFileClick={onFileClickWithProps}
          />
        </CardStyles.DropdownWrap>
      )}
    </CardStyles.Wrap>
  );
};

export default Card;
