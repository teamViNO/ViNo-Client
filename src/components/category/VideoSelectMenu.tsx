import * as CategoryPageStyles from '@/styles/category/index.style';
import GarbageSvg from '@/assets/icons/garbage.svg?react';
import CloseSvg from '@/assets/icons/close.svg?react';
import { useState } from 'react';
import { CategorySelectBox } from '../SummaryPage/SummaryDetailBox/CategorySelectBox';
import { IFolderProps } from 'types/category';

interface IVideoSelectMenuProps {
  categories: IFolderProps[];
  totalVideoCount: number;
  checkedVideos: number[];
  setCheckedVideos: React.Dispatch<React.SetStateAction<number[]>>;
  handleDeleteVideos: () => void;
  allCheckBtnHandler: () => void;
}

const VideoSelectMenu = ({
  categories,
  totalVideoCount,
  checkedVideos,
  setCheckedVideos,
  handleDeleteVideos,
  allCheckBtnHandler,
}: IVideoSelectMenuProps) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    categories.length ? categories[0].categoryId : -1,
  );

  const handleSelectCategory = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
  };

  const onFileClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // 비디오 이동 API 호출 후 모든 비디오 받아오는 API 재호출로 최신화하기
  };
  return (
    <CategoryPageStyles.SelectModeWrap>
      <div>
        <CategoryPageStyles.AllSelectBtn onClick={allCheckBtnHandler}>
          {checkedVideos.length === totalVideoCount ? '모두 삭제' : '모두 선택'}
        </CategoryPageStyles.AllSelectBtn>
        <CategoryPageStyles.SelectedCount>
          {checkedVideos.length}개 선택
        </CategoryPageStyles.SelectedCount>
      </div>
      <CategoryPageStyles.CardManagement>
        <CategoryPageStyles.DropdownWrap>
          <CategorySelectBox
            selectedCategoryId={selectedCategoryId}
            onSelect={handleSelectCategory}
            onFileClick={onFileClick}
          />
        </CategoryPageStyles.DropdownWrap>
        <CategoryPageStyles.ManagementBoxGray onClick={handleDeleteVideos}>
          <GarbageSvg width={28} height={28} />
        </CategoryPageStyles.ManagementBoxGray>
        <CategoryPageStyles.ManagementBox>
          <CloseSvg
            width={28}
            height={28}
            onClick={() => {
              setCheckedVideos([]);
            }}
          />
        </CategoryPageStyles.ManagementBox>
      </CategoryPageStyles.CardManagement>
    </CategoryPageStyles.SelectModeWrap>
  );
};

export default VideoSelectMenu;
