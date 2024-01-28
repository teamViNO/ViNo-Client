import ClosedFileSvg from '@/assets/icons/close-file.svg?react';
import OpenFileSvg from '@/assets/icons/open-file.svg?react';
import MoreOptionsSvg from '@/assets/icons/more-options.svg?react';
import * as TopCategoryStyles from '@/styles/layout/sideBar/TopCategory.style';
import React, { useState } from 'react';
import useOutsideClick from '@/hooks/useOutsideClick';
import SubCategory from './SubCategory';
import Option from './Option';
import handleEdit from '@/utils/handleEdit';

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
  const [isEditing, setIsEditing] = useState(false);
  const [edit, setEdit] = useState(name);

  const options = ['추가', '수정', '삭제', '이동'];

  const finishEdit = () => {
    setIsEditing(false);
  };
  const [editNameRef] = useOutsideClick<HTMLDivElement>(finishEdit);

  const handleOptionClick = (e: React.MouseEvent, option: string) => {
    e.stopPropagation();
    if (option === '추가') {
      setFolderOptionModalOpen(false);
      setIsSubCategoryModalOpen(true);
    } else if (option === '수정') {
      setIsEditing(true);
      setFolderOptionModalOpen(false);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleEdit(e, setEdit);
  return (
    <>
      <TopCategoryStyles.Container selected={topId === categoryID && !subId}>
        {isEditing ? (
          <TopCategoryStyles.EditNameInputWrap ref={editNameRef}>
            <OpenFileSvg width={28} height={28} />
            <TopCategoryStyles.EditNameInput
              value={edit}
              onChange={handleInput}
            />
          </TopCategoryStyles.EditNameInputWrap>
        ) : (
          <>
            <TopCategoryStyles.FolderButton to={`/category/${categoryID}`}>
              <TopCategoryStyles.ImageTextWrap>
                {topId === categoryID ? (
                  <OpenFileSvg width={28} height={28} />
                ) : (
                  <ClosedFileSvg width={28} height={28} />
                )}
                {isEditing ? (
                  <input />
                ) : (
                  <TopCategoryStyles.CommonTitle>
                    {edit}
                  </TopCategoryStyles.CommonTitle>
                )}
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
          </>
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
              key={subFolder.name}
            />
          ))}
        </TopCategoryStyles.SubFolderContainer>
      )}
    </>
  );
};

export default TopCategory;
