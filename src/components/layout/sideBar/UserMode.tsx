import LookSvg from '@/assets/icons/look.svg?react';
import * as UserModeStyle from '@/styles/layout/sideBar/UserMode.style';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { topCategoryModalState } from '@/stores/modal';
import AddCategoryModal from '@/components/modals/AddCategoryModal';
import SuccessAddCategoryModal from '@/components/modals/SuccessAddCategoryModal';
import { useRef, useState } from 'react';
import TopCategory from './TopCategory';
import DeleteCategory from './DeleteCategory';
import { categoryState } from '@/stores/category';
import { IFolderProps, ISubFolderProps } from 'types/category';
import useMoveCategory from '@/hooks/useMoveCategory';
import { deleteCategory } from '@/apis/category';
import useUpdateCategories from '@/hooks/useUpdateCategories';
import useCreateToast from '@/hooks/useCreateToast';

const UserMode = () => {
  const isTopCategoryModalOpen = useRecoilValue(topCategoryModalState);
  const [isSuccessAddCategoryModalOpen, setIsSuccessAddCategoryModalOpen] =
    useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [to, setTo] = useState('');
  const categories = useRecoilValue(categoryState);
  const [isSubCategoryModalOpen, setIsSubCategoryModalOpen] = useState(false);
  const grabedCategory = useRef<ISubFolderProps | undefined>(undefined);
  const dropedCategory = useRef<number | undefined>(undefined);
  const { createToast } = useCreateToast();
  const [isEditing, setIsEditing] = useState({
    activated: false,
    categoryId: 0,
  });
  const navigate = useNavigate();

  const { updateCategories } = useUpdateCategories();

  const { subToOtherTop, subToTop, topToOtherTop } = useMoveCategory();

  const location = useLocation();
  const pathname = location.pathname.replace('/category/', '');
  const href = pathname === 'recent' ? 'recent' : pathname.split('/');
  const topId = Number(href[0]);
  const subId = Number(href[1]);

  const handleDeleteCategory = async () => {
    const response = await deleteCategory(categoryId!);
    if (response.isSuccess) {
      updateCategories();
      navigate('/category/recent');
    }
    setIsDeleteModalOpen(false);
  };

  const putCategoryFolder = async () => {
    if (grabedCategory.current?.categoryId === dropedCategory.current) return;

    let response;
    if (grabedCategory.current?.topCategoryId === -1) {
      response = await subToTop(grabedCategory);
    } else if (grabedCategory.current?.topCategoryId === null) {
      response = await topToOtherTop(grabedCategory, dropedCategory);
    } else {
      response = await subToOtherTop(dropedCategory.current!, grabedCategory);
    }
    // 잡은 카테고리, 놓은 카테고리 초기화
    if (response) {
      grabedCategory.current = undefined;
      dropedCategory.current = undefined;
    } else {
      createToast('카테고리를 옮기는데 오류가 발생했습니다.');
    }
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
            grabedCategory={grabedCategory}
            dropedCategory={dropedCategory}
            category={category}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            setIsSubCategoryModalOpen={setIsSubCategoryModalOpen}
            setIsDeleteModalOpen={setIsDeleteModalOpen}
            putCategoryFolder={putCategoryFolder}
            setCategoryId={setCategoryId}
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
          topCategoryId={topId}
          setTo={setTo}
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
          to={to}
        />
      )}
    </>
  );
};

export default UserMode;
