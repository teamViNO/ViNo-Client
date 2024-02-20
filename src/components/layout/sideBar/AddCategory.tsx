import * as AddCategoryStyle from '@/styles/layout/sideBar/AddCategory.style';
import PlusSvg from '@/assets/icons/plus.svg?react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { addCategoryModalState } from '@/stores/modal';
import { userTokenState } from '@/stores/user';
import { useState } from 'react';
import NoticeModal from '@/components/modals/NoticeModal';

const AddCategory = () => {
  const isUser = useRecoilValue(userTokenState);
  const setIsAddCategoryModalOpen = useSetRecoilState(addCategoryModalState);
  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);

  const openAddModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsAddCategoryModalOpen({
      location: 'top',
      isOpen: true,
      categoryId: -1,
    });
    e.stopPropagation();
  };

  const openGuestNoticeModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsNoticeModalOpen(true);
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
      {isNoticeModalOpen && (
        <NoticeModal
          title="로그인하고 중요한 영상 저장하기"
          subTitle="로그인 후 더 많은 서비스를 이용해보세요!"
          to="/sign-in"
          buttonTitle="로그인 하기"
          setIsNoticeModalOpen={setIsNoticeModalOpen}
        />
      )}
    </AddCategoryStyle.Wrap>
  );
};

export default AddCategory;
