import ClosedFileSvg from '@/assets/icons/close-file.svg?react';
import OpenFileSvg from '@/assets/icons/open-file.svg?react';
import MoreOptionsSvg from '@/assets/icons/more-options.svg?react';
import * as TopCategoryStyles from '@/styles/layout/sideBar/TopCategory.style';
import React, { useState } from 'react';
import useOutsideClick from '@/hooks/useOutsideClick';
import SubCategory from './SubCategory';
import Option from './Option';
import handleEdit from '@/utils/handleEdit';
import { ISubFolderProps } from './UserMode';

interface ITopCategoryProps {
  topId: number;
  subId: number;
  categoryID: number;
  name: string;
  subFolders: { categoryID: number; name: string }[];
  grabedCategory: React.MutableRefObject<ISubFolderProps | undefined>;
  dropedCategory: React.MutableRefObject<number | undefined>;
  setIsSubCategoryModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  putCategoryFolder: () => void;
}

const TopCategory = ({
  topId,
  subId,
  categoryID,
  name,
  subFolders,
  grabedCategory,
  dropedCategory,
  setIsSubCategoryModalOpen,
  setIsDeleteModalOpen,
  putCategoryFolder,
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
    } else if (option === '삭제') {
      setFolderOptionModalOpen(false);
      setIsDeleteModalOpen(true);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleEdit(e, setEdit);

  return (
    <>
      <TopCategoryStyles.Container
        className={`${topId}`}
        onDragEnter={() => {
          if (grabedCategory.current !== undefined) {
            grabedCategory.current = {
              ...grabedCategory.current,
              topCategoryID: categoryID,
            };
          }
          dropedCategory.current = categoryID;
        }}
        selected={topId === categoryID && !subId}
      >
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
              setIsDeleteModalOpen={setIsDeleteModalOpen}
              grabedCategory={grabedCategory}
              putCategoryFolder={putCategoryFolder}
              key={subFolder.name}
            />
          ))}
        </TopCategoryStyles.SubFolderContainer>
      )}
      <div
        style={{ height: '12px', backgroundColor: 'white' }}
        onDragEnter={(e) => {
          const target = e.target as HTMLElement;
          target.style.backgroundColor = 'black';
        }}
        onDragLeave={(e) => {
          const target = e.target as HTMLElement;
          target.style.backgroundColor = 'white';
        }}
      />
    </>
  );
};

export default TopCategory;
