import ClosedFileSvg from '@/assets/icons/close-file.svg?react';
import OpenFileSvg from '@/assets/icons/open-file.svg?react';
import MoreOptionsSvg from '@/assets/icons/more-options.svg?react';
import * as TopCategoryStyles from '@/styles/layout/sideBar/TopCategory.style';
import React, { useState } from 'react';
import useOutsideClick from '@/hooks/useOutsideClick';
import SubCategory from './SubCategory';
import Option from './Option';
import handleDrag from '@/utils/handleDrag';
import { IFolderProps, ISubFolderProps } from 'types/category';
import EditCategoryName from '@/components/category/EditCategoryName';

interface ITopCategoryProps {
  topId: number;
  subId: number;
  index: number;
  grabedCategory: React.MutableRefObject<ISubFolderProps | undefined>;
  dropedCategory: React.MutableRefObject<number | undefined>;
  category: IFolderProps;
  isEditing: { activated: boolean; categoryId: number };
  setIsEditing: React.Dispatch<
    React.SetStateAction<{ activated: boolean; categoryId: number }>
  >;
  setIsSubCategoryModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCategoryId: React.Dispatch<React.SetStateAction<number | null>>;
  putCategoryFolder: () => void;
}

const TopCategory = ({
  topId,
  subId,
  index,
  grabedCategory,
  dropedCategory,
  category,
  isEditing,
  setIsEditing,
  setIsSubCategoryModalOpen,
  setIsDeleteModalOpen,
  putCategoryFolder,
  setCategoryId,
}: ITopCategoryProps) => {
  const [folderOptionModalOpen, setFolderOptionModalOpen] = useState(false);
  const [folderOptionModalRef] = useOutsideClick<HTMLDivElement>(() =>
    setFolderOptionModalOpen(false),
  );
  const { dragEnter, dragLeave } = handleDrag();
  const [edit, setEdit] = useState(category.name);
  const [beforeEdit, setBeforeEdit] = useState(edit);
  const options = ['추가', '수정', '삭제', '이동'];

  const handleOptionClick = (e: React.MouseEvent, option: string) => {
    e.stopPropagation();
    if (option === '추가') {
      setIsSubCategoryModalOpen(true);
    } else if (option === '수정') {
      setIsEditing({ activated: true, categoryId: category.categoryId });
      setBeforeEdit(edit);
    } else if (option === '삭제') {
      setCategoryId(category.categoryId);
      setIsDeleteModalOpen(true);
    }
    setFolderOptionModalOpen(false);
  };

  const handleOpenModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setFolderOptionModalOpen(true);
  };

  const handleDragStart = () =>
    (grabedCategory.current = {
      categoryId: category.categoryId,
      name: category.name,
      topCategoryId: null,
    });

  const handleDragEnter = () => {
    dropedCategory.current = category.categoryId;
    if (grabedCategory.current?.topCategoryId === null) return;
    if (grabedCategory.current !== undefined) {
      grabedCategory.current = {
        ...grabedCategory.current,
        topCategoryId: category.categoryId,
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
        selected={topId === category.categoryId && !subId}
      >
        {isEditing.activated && isEditing.categoryId === category.categoryId ? (
          <EditCategoryName
            mode="top"
            categoryId={category.categoryId}
            beforeEdit={beforeEdit}
            edit={edit}
            setEdit={setEdit}
            setIsEditing={setIsEditing}
          />
        ) : (
          <>
            <TopCategoryStyles.FolderButton
              to={`/category/${category.categoryId}`}
            >
              <TopCategoryStyles.ImageTextWrap>
                {topId === category.categoryId ? (
                  <OpenFileSvg width={28} height={28} />
                ) : (
                  <ClosedFileSvg width={28} height={28} />
                )}
                <TopCategoryStyles.CommonTitle>
                  {edit}
                </TopCategoryStyles.CommonTitle>
              </TopCategoryStyles.ImageTextWrap>
            </TopCategoryStyles.FolderButton>
            {!isEditing.activated && (
              <TopCategoryStyles.ShowOptionButton onClick={handleOpenModal}>
                <MoreOptionsSvg />
              </TopCategoryStyles.ShowOptionButton>
            )}

            {folderOptionModalOpen && (
              <Option
                options={options}
                handleOptionClick={handleOptionClick}
                optionWrapRef={folderOptionModalRef}
              />
            )}
          </>
        )}
      </TopCategoryStyles.Container>
      {topId === category.categoryId && (
        <TopCategoryStyles.SubFolderContainer>
          {category.subFolders.map((subFolder) => (
            <SubCategory
              topId={topId}
              subId={subId}
              subFolder={subFolder}
              grabedCategory={grabedCategory}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              setIsDeleteModalOpen={setIsDeleteModalOpen}
              putCategoryFolder={putCategoryFolder}
              setCategoryId={setCategoryId}
              key={`${subFolder.name}-${subFolder.categoryId}`}
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
