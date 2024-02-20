import { useRecoilValue, useSetRecoilState } from 'recoil';

import PlusSvg from '@/assets/icons/plus.svg?react';

import { addCategoryModalState, guestCategoryModalState } from '@/stores/modal';
import { userTokenState } from '@/stores/user';

import * as AddCategoryStyle from '@/styles/layout/sideBar/AddCategory.style';

const AddCategory = () => {
  const isUser = useRecoilValue(userTokenState);
  const setIsAddCategoryModalOpen = useSetRecoilState(addCategoryModalState);
  const setGuestCategoryModal = useSetRecoilState(guestCategoryModalState);

  const openAddModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsAddCategoryModalOpen({
      location: 'top',
      isOpen: true,
      categoryId: -1,
    });
    e.stopPropagation();
  };

  const openGuestNoticeModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    setGuestCategoryModal(true);
    e.stopPropagation();
  };

  const handleClickedAdd = (e: React.MouseEvent<HTMLButtonElement>) =>
    isUser ? openAddModal(e) : openGuestNoticeModal(e);
  return (
    <>
      <AddCategoryStyle.Wrap>
        <AddCategoryStyle.Text>카테고리</AddCategoryStyle.Text>
        <AddCategoryStyle.Button onClick={handleClickedAdd}>
          <PlusSvg width={20} height={20} />
        </AddCategoryStyle.Button>
      </AddCategoryStyle.Wrap>
    </>
  );
};

export default AddCategory;
