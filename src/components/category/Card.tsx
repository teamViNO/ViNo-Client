import React, { useState } from 'react';
import * as CardStyles from '@/styles/category/Card.style';
import { IVideoProps } from 'types/videos';
import { CategorySelectBox } from '../SummaryPage/SummaryDetailBox/CategorySelectBox';
import { ISelectedCategoryProps } from 'types/category';
import { useRecoilValue } from 'recoil';
import { categoryState } from '@/stores/category';

interface ICardProps {
  mode: 'default' | 'category' | 'recommend';
  video: IVideoProps;
  checkedVideos?: number[];
  setCheckedVideos?: (value: number[]) => void;
  onFileClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
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
  const [selectedCategory, setSelectedCategory] =
    useState<ISelectedCategoryProps>({
      name: category[0].name,
      categoryId: category[0].categoryId,
    });

  const handleSelectCategory = ({
    name,
    categoryId,
  }: ISelectedCategoryProps) => {
    setSelectedCategory({
      name,
      categoryId,
    });
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
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <CardStyles.Image source={video.image}>
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
      </CardStyles.Image>

      <CardStyles.Content to={`/summary/${video.video_id}`}>
        <CardStyles.Title>{video.title}</CardStyles.Title>
        <CardStyles.Summary>{video.description}</CardStyles.Summary>
        <CardStyles.ChipWrap>
          {video.tag.map((tag) => (
            <CardStyles.Chip key={tag.name}>{`# ${tag.name}`}</CardStyles.Chip>
          ))}
        </CardStyles.ChipWrap>
      </CardStyles.Content>
      {isOpen && mode === 'recommend' && (
        <CardStyles.DropdownWrap>
          <CategorySelectBox
            selectedCategory={selectedCategory}
            handleSelectCategory={handleSelectCategory}
            onFileClick={onFileClick}
          />
        </CardStyles.DropdownWrap>
      )}
    </CardStyles.Wrap>
  );
};

export default Card;
