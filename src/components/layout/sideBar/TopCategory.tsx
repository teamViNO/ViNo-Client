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
import handleDrag from '@/utils/handleDrag';

interface ITopCategoryProps {
  topId: number;
  subId: number;
  index: number;
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
  index,
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
  const { dragEnter, dragLeave } = handleDrag();
  const [isEditing, setIsEditing] = useState(false);
  const [edit, setEdit] = useState(name);
  const [beforeEdit, setBeforeEdit] = useState(edit);

  const categoryNameRegex = /^[a-zA-Z0-9가-힣\s]*$/;
  const [nameRegex, setNameRegex] = useState(true);
  const options = ['추가', '수정', '삭제', '이동'];

  const finishEdit = () => {
    if (!edit.length) {
      setEdit(beforeEdit);
    }
    setIsEditing(false);
  };
  const [editNameRef] = useOutsideClick<HTMLDivElement>(finishEdit);

  const handleOptionClick = (e: React.MouseEvent, option: string) => {
    e.stopPropagation();
    if (option === '추가') {
      setIsSubCategoryModalOpen(true);
    } else if (option === '수정') {
      setIsEditing(true);
      setBeforeEdit(edit);
    } else if (option === '삭제') {
      setIsDeleteModalOpen(true);
    }
    setFolderOptionModalOpen(false);
  };

  const handleOpenModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFolderOptionModalOpen(true);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!categoryNameRegex.test(e.target.value)) {
      setNameRegex(false);
      return;
    }
    setNameRegex(true);
    handleEdit(e, setEdit);
  };
  const handleDragStart = () =>
    (grabedCategory.current = {
      categoryID: categoryID,
      name,
      topCategoryID: null,
    });

  const handleDragEnter = () => {
    dropedCategory.current = categoryID;
    if (grabedCategory.current?.topCategoryID === null) return;
    if (grabedCategory.current !== undefined) {
      grabedCategory.current = {
        ...grabedCategory.current,
        topCategoryID: categoryID,
      };
    }
  };

  const handleDropZoneDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    dropedCategory.current = index;
    dragEnter(e);
    if (grabedCategory.current?.topCategoryID === null) return;
    grabedCategory.current = {
      categoryID: grabedCategory.current!.categoryID,
      name: grabedCategory.current!.name,
      topCategoryID: -1,
    };
  };
  return (
    <>
      <TopCategoryStyles.Container
        className={`${topId}`}
        onDragStart={handleDragStart}
        onDragEnter={handleDragEnter}
        onDragEnd={putCategoryFolder}
        selected={topId === categoryID && !subId}
      >
        {isEditing ? (
          <TopCategoryStyles.EditNameInputWrap
            ref={editNameRef}
            className={`${(!nameRegex || !edit.length) && 'warning'}`}
          >
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
              <TopCategoryStyles.ShowOptionButton onClick={handleOpenModal}>
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
      <TopCategoryStyles.Drop
        onDragEnter={handleDropZoneDragEnter}
        onDragLeave={dragLeave}
      />
    </>
  );
};

export default TopCategory;
