import * as AddCategoryStyle from '@/styles/layout/sideBar/AddCategory.style';
import PlusSvg from '@/assets/icons/plus.svg?react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { topCategoryModalState } from '@/stores/modal';
import { userState } from '@/stores/user';

const AddCategory = () => {
  const isUser = useRecoilValue(userState);
  const setTopCategoryModal = useSetRecoilState(topCategoryModalState);

  const openModal = (e: React.MouseEvent) => {
    setTopCategoryModal(true);
    e.stopPropagation();
  };

  const handleClickedAdd = (e: React.MouseEvent) =>
    isUser ? openModal(e) : alert('로그인을 해주세요');
  return (
    <AddCategoryStyle.Wrap>
      <AddCategoryStyle.Text>카테고리</AddCategoryStyle.Text>
      <AddCategoryStyle.Button onClick={handleClickedAdd}>
        <PlusSvg width={20} height={20} />
      </AddCategoryStyle.Button>
    </AddCategoryStyle.Wrap>
  );
};

export default AddCategory;
