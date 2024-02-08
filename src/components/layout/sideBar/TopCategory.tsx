import ClosedFileSvg from '@/assets/icons/close-file.svg?react';
import OpenFileSvg from '@/assets/icons/open-file.svg?react';
import MoreOptionsSvg from '@/assets/icons/more-options.svg?react';
import * as TopCategoryStyles from '@/styles/layout/sideBar/TopCategory.style';
import React, { useState } from 'react';
import useOutsideClick from '@/hooks/useOutsideClick';
import SubCategory from './SubCategory';
import Option from './Option';
import handleEdit from '@/utils/handleEdit';
import handleDrag from '@/utils/handleDrag';
import { ISubFolderProps } from 'types/category';

interface ITopCategoryProps {
  topId: number;
  subId: number;
  index: number;
  categoryId: number;
  name: string;
  subFolders: { categoryId: number; name: string }[];
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
  categoryId,
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
      categoryId: categoryId,
      name,
      topCategoryId: null,
    });

  const handleDragEnter = () => {
    dropedCategory.current = categoryId;
    if (grabedCategory.current?.topCategoryId === null) return;
    if (grabedCategory.current !== undefined) {
      grabedCategory.current = {
        ...grabedCategory.current,
        topCategoryId: categoryId,
      };
    }
  };

  const handleDropZoneDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    dropedCategory.current = index;
    dragEnter(e);
    if (grabedCategory.current?.topCategoryId === null) return;
    grabedCategory.current = {
      categoryId: grabedCategory.current!.categoryId,
      name: grabedCategory.current!.name,
      topCategoryId: -1,
    };
  };
  return (
    <>
      <TopCategoryStyles.Container
        className={`${topId}`}
        onDragStart={handleDragStart}
        onDragEnter={handleDragEnter}
        onDragEnd={putCategoryFolder}
        selected={topId === categoryId && !subId}
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
            <TopCategoryStyles.FolderButton to={`/category/${categoryId}`}>
              <TopCategoryStyles.ImageTextWrap>
                {topId === categoryId ? (
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
            {topId === categoryId && !subId && (
              <TopCategoryStyles.ShowOptionButton onClick={handleOpenModal}>
                <MoreOptionsSvg />
              </TopCategoryStyles.ShowOptionButton>
            )}
            {folderOptionModalOpen && topId === categoryId && (
              <Option
                options={options}
                handleOptionClick={handleOptionClick}
                optionWrapRef={folderOptionModalRef}
              />
            )}
          </>
        )}
      </TopCategoryStyles.Container>
      {topId === categoryId && (
        <TopCategoryStyles.SubFolderContainer>
          {subFolders.map((subFolder) => (
            <SubCategory
              topId={topId}
              subId={subId}
              categoryId={subFolder.categoryId}
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
