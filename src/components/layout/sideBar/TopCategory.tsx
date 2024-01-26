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
  id: number;
  name: string;
  subFolders: { id: number; name: string }[];
  setIsSubCategoryModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopCategory = ({
  topId,
  subId,
  id,
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
      <TopCategoryStyles.Container selected={topId === id && !subId}>
        <TopCategoryStyles.FolderButton to={`/category/${id}`}>
          <TopCategoryStyles.ImageTextWrap>
            {topId === id ? (
              <OpenFileSvg width={28} height={28} />
            ) : (
              <ClosedFileSvg width={28} height={28} />
            )}
            <TopCategoryStyles.CommonTitle>
              {name}
            </TopCategoryStyles.CommonTitle>
          </TopCategoryStyles.ImageTextWrap>
        </TopCategoryStyles.FolderButton>
        {topId === id && !subId && (
          <TopCategoryStyles.ShowOptionButton
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              setFolderOptionModalOpen(true);
            }}
          >
            <MoreOptionsSvg />
          </TopCategoryStyles.ShowOptionButton>
        )}
        {folderOptionModalOpen && topId === id && (
          <Option
            options={options}
            handleOptionClick={handleOptionClick}
            optionWrapRef={folderOptionModalRef}
          />
        )}
      </TopCategoryStyles.Container>
      {topId === id && (
        <TopCategoryStyles.SubFolderContainer>
          {subFolders.map((subFolder) => (
            <SubCategory
              topId={topId}
              subId={subId}
              id={subFolder.id}
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
