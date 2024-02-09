import LookSvg from '@/assets/icons/look.svg?react';
import * as UserModeStyle from '@/styles/layout/sideBar/UserMode.style';
import { useLocation } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { topCategoryModalState } from '@/stores/modal';
import AddCategoryModal from '@/components/modals/AddCategoryModal';
import SuccessAddCategoryModal from '@/components/modals/SuccessAddCategoryModal';
import { useRef, useState } from 'react';
import TopCategory from './TopCategory';
import DeleteCategory from './DeleteCategory';
import handleCategory from '@/utils/handleCategory';
import { categoryState } from '@/stores/category';
import { IFolderProps, ISubFolderProps } from 'types/category';
import useMoveCategory from '@/hooks/useMoveCategory';

const UserMode = () => {
  const isTopCategoryModalOpen = useRecoilValue(topCategoryModalState);
  const [isSuccessAddCategoryModalOpen, setIsSuccessAddCategoryModalOpen] =
    useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isSubAdded, setIsSubAdded] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [categories, setCategories] = useRecoilState(categoryState);
  const [isSubCategoryModalOpen, setIsSubCategoryModalOpen] = useState(false);
  const grabedCategory = useRef<ISubFolderProps | undefined>(undefined);
  const dropedCategory = useRef<number | undefined>(undefined);
  const { deleteSubCategory } = handleCategory();

  const { subToOtherTop, subToTop, topToOtherTop } = useMoveCategory();

  const location = useLocation();
  const pathname = location.pathname.replace('/category/', '');
  const href = pathname === 'recent' ? 'recent' : pathname.split('/');
  const topId = Number(href[0]);
  const subId = Number(href[1]);

  const handleDeleteCategory = () => {
    if (!isNaN(subId)) {
      setCategories([...deleteSubCategory(categories, topId, subId)]);
    } else {
      const newData = categories.filter(
        (myFolder) => myFolder.categoryId !== topId,
      );
      setCategories([...newData]);
    }
    setIsDeleteModalOpen(false);
  };

  const putCategoryFolder = async () => {
    if (grabedCategory.current?.topCategoryId === -1) {
      subToTop(topId, grabedCategory, dropedCategory);
    } else if (grabedCategory.current?.topCategoryId === null) {
      topToOtherTop(grabedCategory, dropedCategory);
    } else {
      subToOtherTop(topId, grabedCategory);
    }
    // 잡은 카테고리, 놓은 카테고리 초기화
    grabedCategory.current = undefined;
    dropedCategory.current = undefined;
  };
  return (
    <>
      <>
        <UserModeStyle.RecentVideoButton
          selected={href === 'recent'}
          to={'/category/recent'}
        >
          <UserModeStyle.ImageTextWrap>
            <LookSvg width={28} height={28} />
            <UserModeStyle.CommonTitle>
              최근 읽은 영상
            </UserModeStyle.CommonTitle>
          </UserModeStyle.ImageTextWrap>
        </UserModeStyle.RecentVideoButton>
        {categories.map((category: IFolderProps, index: number) => (
          <TopCategory
            topId={topId}
            subId={subId}
            index={index}
            categoryId={category.categoryId}
            name={category.name}
            subFolders={category.subFolders}
            grabedCategory={grabedCategory}
            dropedCategory={dropedCategory}
            setIsSubCategoryModalOpen={setIsSubCategoryModalOpen}
            setIsDeleteModalOpen={setIsDeleteModalOpen}
            putCategoryFolder={putCategoryFolder}
            key={`${category.name}-${category.categoryId}`}
          />
        ))}
      </>
      {(isTopCategoryModalOpen || isSubCategoryModalOpen) && (
        <AddCategoryModal
          isTopCategoryModalOpen={isTopCategoryModalOpen}
          setIsSubCategoryModalOpen={setIsSubCategoryModalOpen}
          categoryName={categoryName}
          setCategoryName={setCategoryName}
          setIsSuccessAddCategoryModalOpen={setIsSuccessAddCategoryModalOpen}
          setIsSubAdded={setIsSubAdded}
          topCategoryId={topId}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteCategory
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          onDeleteClick={handleDeleteCategory}
        />
      )}
      {isSuccessAddCategoryModalOpen && (
        <SuccessAddCategoryModal
          categoryName={categoryName}
          setCategoryName={setCategoryName}
          setIsSuccessAddCategoryModalOpen={setIsSuccessAddCategoryModalOpen}
          isSubAdded={isSubAdded}
          setIsSubAdded={setIsSubAdded}
          topId={topId}
        />
      )}
    </>
  );
};

export default UserMode;
