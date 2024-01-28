import ClosedFileSvg from '@/assets/icons/close-file.svg?react';
import OpenFileSvg from '@/assets/icons/open-file.svg?react';
import MoreOptionsSvg from '@/assets/icons/more-options.svg?react';
import * as TopCategoryStyles from '@/styles/layout/sideBar/TopCategory.style';
import { useState } from 'react';
import useOutsideClick from '@/hooks/useOutsideClick';
import SubCategory from './SubCategory';
import Option from './Option';

interface ITopCategoryProps {
  topId: number;
  subId: number;
  categoryID: number;
  name: string;
  subFolders: { categoryID: number; name: string }[];
  setIsSubCategoryModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopCategory = ({
  topId,
  subId,
  categoryID,
  name,
  subFolders,
  setIsSubCategoryModalOpen,
}: ITopCategoryProps) => {
  const [folderOptionModalOpen, setFolderOptionModalOpen] = useState(false);
  const [folderOptionModalRef] = useOutsideClick<HTMLDivElement>(() =>
    setFolderOptionModalOpen(false),
  );

  const options = ['추가', '수정', '삭제', '이동'];

  const handleOptionClick = (e: React.MouseEvent, option: string) => {
    if (option === '추가') {
      e.stopPropagation();
      setFolderOptionModalOpen(false);
      setIsSubCategoryModalOpen(true);
    }
  };
  return (
    <>
      <TopCategoryStyles.Container selected={topId === categoryID && !subId}>
        <TopCategoryStyles.FolderButton to={`/category/${categoryID}`}>
          <TopCategoryStyles.ImageTextWrap>
            {topId === categoryID ? (
              <OpenFileSvg width={28} height={28} />
            ) : (
              <ClosedFileSvg width={28} height={28} />
            )}
            <TopCategoryStyles.CommonTitle>
              {name}
            </TopCategoryStyles.CommonTitle>
          </TopCategoryStyles.ImageTextWrap>
        </TopCategoryStyles.FolderButton>
        {topId === categoryID && !subId && (
          <TopCategoryStyles.ShowOptionButton
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              setFolderOptionModalOpen(true);
            }}
          >
            <MoreOptionsSvg />
          </TopCategoryStyles.ShowOptionButton>
        )}
        {folderOptionModalOpen && topId === categoryID && (
          <Option
            options={options}
            handleOptionClick={handleOptionClick}
            optionWrapRef={folderOptionModalRef}
          />
        )}
      </TopCategoryStyles.Container>
      {topId === categoryID && (
        <TopCategoryStyles.SubFolderContainer>
          {subFolders.map((subFolder) => (
            <SubCategory
              topId={topId}
              subId={subId}
              categoryID={subFolder.categoryID}
              name={subFolder.name}
              handleOptionClick={handleOptionClick}
              key={subFolder.name}
            />
          ))}
        </TopCategoryStyles.SubFolderContainer>
      )}
    </>
  );
};

export default TopCategory;
