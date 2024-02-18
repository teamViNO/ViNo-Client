import * as CategoryPageStyles from '@/styles/category/index.style';
import GarbageSvg from '@/assets/icons/garbage.svg?react';
import CloseSvg from '@/assets/icons/close.svg?react';
import { CategorySelectBox } from '../SummaryPage/SummaryDetailBox/CategorySelectBox';
import { IFolderProps } from 'types/category';

interface IVideoSelectMenuProps {
  categories: IFolderProps[];
  totalVideoCount: number;
  checkedVideos: number[];
  setCheckedVideos: React.Dispatch<React.SetStateAction<number[] | undefined>>;
  handleDeleteVideos: () => void;
  allCheckBtnHandler: () => void;
  onFileClick?: (categoryId: number) => void;
}

const VideoSelectMenu = ({
  totalVideoCount,
  checkedVideos,
  setCheckedVideos,
  handleDeleteVideos,
  allCheckBtnHandler,
  onFileClick,
}: IVideoSelectMenuProps) => {
  const onFileClickWithProps = (categoryId: number) =>
    onFileClick && onFileClick(categoryId);

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
          <CategorySelectBox onSelect={onFileClickWithProps} />
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
