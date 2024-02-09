import * as AddCategoryStyle from '@/styles/layout/sideBar/AddCategory.style';
import PlusSvg from '@/assets/icons/plus.svg?react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { topCategoryModalState } from '@/stores/modal';
import { userTokenState } from '@/stores/user';
import { useState } from 'react';
import GuestNoticeModal from '@/components/modals/GuestNoticeModal';

const AddCategory = () => {
  const isUser = useRecoilValue(userTokenState);
  const setTopCategoryModal = useSetRecoilState(topCategoryModalState);
  const [isGuestNoticeModalOpen, setIsGuestNoticeModalOpen] = useState(false);

  const openAddModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTopCategoryModal(true);
    e.stopPropagation();
  };

  const openGuestNoticeModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsGuestNoticeModalOpen(true);
    e.stopPropagation();
  };

  const handleClickedAdd = (e: React.MouseEvent<HTMLButtonElement>) =>
    isUser ? openAddModal(e) : openGuestNoticeModal(e);
  return (
    <AddCategoryStyle.Wrap>
      <AddCategoryStyle.Text>카테고리</AddCategoryStyle.Text>
      <AddCategoryStyle.Button onClick={handleClickedAdd}>
        <PlusSvg width={20} height={20} />
      </AddCategoryStyle.Button>
      {isGuestNoticeModalOpen && (
        <GuestNoticeModal
          setIsGuestNoticeModalOpen={setIsGuestNoticeModalOpen}
        />
      )}
    </AddCategoryStyle.Wrap>
  );
};

export default AddCategory;
