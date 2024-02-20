import MoreOptionsSvg from '@/assets/icons/more-options.svg?react';
import useOutsideClick from '@/hooks/useOutsideClick';
import { useState } from 'react';
import * as SubCategoryStyles from '@/styles/layout/sideBar/SubCategory.style';
import Option from './Option';
import handleDrag from '@/utils/handleDrag';
import { IEditProps, ISubFolderProps } from 'types/category';
import EditCategoryName from '@/components/category/EditCategoryName';
import useCreateToast from '@/hooks/useCreateToast';

interface ISubCategoryProps {
  topId: number;
  subId: number;
  subFolder: ISubFolderProps;
  grabedCategory: React.MutableRefObject<ISubFolderProps | undefined>;
  isEditing: IEditProps;
  setIsEditing: React.Dispatch<React.SetStateAction<IEditProps>>;
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  putCategoryFolder: () => void;
  setCategoryId: React.Dispatch<React.SetStateAction<number | null>>;
}

const SubCategory = ({
  topId,
  subId,
  subFolder,
  grabedCategory,
  isEditing,
  setIsEditing,
  setIsDeleteModalOpen,
  putCategoryFolder,
  setCategoryId,
}: ISubCategoryProps) => {
  const [subFolderOptionModalOpen, setSubFolderOptionModalOpen] =
    useState(false);
  const [edit, setEdit] = useState(subFolder.name);
  const [beforeEdit, setBeforeEdit] = useState(edit);
  const { createToast } = useCreateToast();

  const [subFolderOptionModalRef] = useOutsideClick<HTMLDivElement>(() =>
    setSubFolderOptionModalOpen(false),
  );
  const { dragEnter, dragLeave } = handleDrag();
  const options = ['수정', '삭제', '이동'];

  const handleOptionClick = (e: React.MouseEvent, option: string) => {
    e.stopPropagation();
    if (option === '수정') {
      if (subFolder.name === '기타') {
        createToast(`'기타' 폴더는 수정할 수 없습니다.`);
        setSubFolderOptionModalOpen(false);
        return;
      }
      setIsEditing({ activated: true, categoryId: subFolder.categoryId });
      setBeforeEdit(edit);
    } else if (option === '삭제') {
      if (subFolder.name === '기타') {
        createToast(`'기타' 폴더는 삭제할 수 없습니다.`);
        setSubFolderOptionModalOpen(false);
        return;
      }
      setCategoryId(subFolder.categoryId);
      setIsDeleteModalOpen(true);
    }
    setSubFolderOptionModalOpen(false);
  };

  const handleOpenModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setSubFolderOptionModalOpen(true);
  };

  const handleDragStart = () =>
    (grabedCategory.current = {
      categoryId: subFolder.categoryId,
      name: subFolder.name,
      topCategoryId: topId,
    });

  const handleDropZoneDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    dragEnter(e);
    if (grabedCategory.current?.topCategoryId === null) return;
  };
  return (
    <SubCategoryStyles.Container
      onDragStart={handleDragStart}
      onDragEnd={putCategoryFolder}
    >
      {isEditing.activated && isEditing.categoryId === subFolder.categoryId ? (
        <EditCategoryName
          mode="sub"
          categoryId={subFolder.categoryId}
          beforeEdit={beforeEdit}
          edit={edit}
          setEdit={setEdit}
          setIsEditing={setIsEditing}
        />
      ) : (
        <SubCategoryStyles.SubFolderWrap>
          <div style={{ display: 'flex' }}>
            <SubCategoryStyles.SubFolder
              selected={subId === subFolder.categoryId}
              to={`/category/${topId}/${subFolder.categoryId}`}
            >
              {edit}
              {!isEditing.activated && (
                <SubCategoryStyles.ShowOptionButton onClick={handleOpenModal}>
                  <MoreOptionsSvg width={16} height={16} />
                </SubCategoryStyles.ShowOptionButton>
              )}
            </SubCategoryStyles.SubFolder>
            {subFolderOptionModalOpen && (
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
