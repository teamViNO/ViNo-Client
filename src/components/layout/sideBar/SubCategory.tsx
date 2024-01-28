import MoreOptionsSvg from '@/assets/icons/more-options.svg?react';
import useOutsideClick from '@/hooks/useOutsideClick';
import { useState } from 'react';
import * as SubCategoryStyles from '@/styles/layout/sideBar/SubCategory.style';
import Option from './Option';

interface ISubCategoryProps {
  topId: number;
  subId: number;
  id: number;
  name: string;
  handleOptionClick: (e: React.MouseEvent, option: string) => void;
}

const SubCategory = ({
  topId,
  subId,
  id,
  name,
  handleOptionClick,
}: ISubCategoryProps) => {
  const [subFolderOptionModalOpen, setSubFolderOptionModalOpen] =
    useState(false);

  const [subFolderOptionModalRef] = useOutsideClick<HTMLDivElement>(() =>
    setSubFolderOptionModalOpen(false),
  );

  const options = ['수정', '삭제', '이동'];
  return (
    <SubCategoryStyles.Container>
      <SubCategoryStyles.SubFolder
        selected={subId === id}
        to={`/category/${topId}/${id}`}
      >
        {name}
        {subId === id && (
          <SubCategoryStyles.ShowOptionButton
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              e.preventDefault();
              setSubFolderOptionModalOpen(true);
            }}
          >
            <MoreOptionsSvg width={16} height={16} />
          </SubCategoryStyles.ShowOptionButton>
        )}
      </SubCategoryStyles.SubFolder>
      {subFolderOptionModalOpen && subId === id && (
        <Option
          options={options}
          handleOptionClick={handleOptionClick}
          optionWrapRef={subFolderOptionModalRef}
        />
      )}
    </SubCategoryStyles.Container>
  );
};

export default SubCategory;
