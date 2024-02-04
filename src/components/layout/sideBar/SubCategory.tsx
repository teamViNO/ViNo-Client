import MoreOptionsSvg from '@/assets/icons/more-options.svg?react';
import useOutsideClick from '@/hooks/useOutsideClick';
import { useState } from 'react';
import * as SubCategoryStyles from '@/styles/layout/sideBar/SubCategory.style';
import Option from './Option';
import handleEdit from '@/utils/handleEdit';
import { ISubFolderProps } from './UserMode';
import handleDrag from '@/utils/handleDrag';

interface ISubCategoryProps {
  topId: number;
  subId: number;
  categoryID: number;
  name: string;
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  grabedCategory: React.MutableRefObject<ISubFolderProps | undefined>;
  putCategoryFolder: () => void;
}

const SubCategory = ({
  topId,
  subId,
  categoryID,
  name,
  setIsDeleteModalOpen,
  grabedCategory,
  putCategoryFolder,
}: ISubCategoryProps) => {
  const [subFolderOptionModalOpen, setSubFolderOptionModalOpen] =
    useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [edit, setEdit] = useState(name);
  const [editNameRef] = useOutsideClick<HTMLDivElement>(() =>
    setIsEditing(false),
  );

  const [subFolderOptionModalRef] = useOutsideClick<HTMLDivElement>(() =>
    setSubFolderOptionModalOpen(false),
  );
  const { dragEnter, dragLeave } = handleDrag();
  const options = ['수정', '삭제', '이동'];

  const handleOptionClick = (e: React.MouseEvent, option: string) => {
    e.stopPropagation();
    if (option === '수정') {
      setIsEditing(true);
    } else if (option === '삭제') {
      setIsDeleteModalOpen(true);
    }
    setSubFolderOptionModalOpen(false);
  };

  const handleOpenModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setSubFolderOptionModalOpen(true);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleEdit(e, setEdit);

  const handleDragStart = () =>
    (grabedCategory.current = {
      categoryID: categoryID,
      name,
      topCategoryID: null,
    });

  const handleDropZoneDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    dragEnter(e);
    if (grabedCategory.current?.topCategoryID === null) return;
  };
  return (
    <SubCategoryStyles.Container
      onDragStart={handleDragStart}
      onDragEnd={putCategoryFolder}
    >
      {isEditing ? (
        <SubCategoryStyles.EditNameInputWrap ref={editNameRef}>
          <SubCategoryStyles.EditNameInput
            value={edit}
            onChange={handleInput}
          />
        </SubCategoryStyles.EditNameInputWrap>
      ) : (
        <SubCategoryStyles.SubFolderWrap>
          <div style={{ display: 'flex' }}>
            <SubCategoryStyles.SubFolder
              selected={subId === categoryID}
              to={`/category/${topId}/${categoryID}`}
            >
              {edit}
              {subId === categoryID && (
                <SubCategoryStyles.ShowOptionButton onClick={handleOpenModal}>
                  <MoreOptionsSvg width={16} height={16} />
                </SubCategoryStyles.ShowOptionButton>
              )}
            </SubCategoryStyles.SubFolder>
            {subFolderOptionModalOpen && subId === categoryID && (
              <Option
                options={options}
                handleOptionClick={handleOptionClick}
                optionWrapRef={subFolderOptionModalRef}
              />
            )}
          </div>
          <SubCategoryStyles.Drop
            onDragEnter={handleDropZoneDragEnter}
            onDragLeave={dragLeave}
          />
        </SubCategoryStyles.SubFolderWrap>
      )}
    </SubCategoryStyles.Container>
  );
};

export default SubCategory;
