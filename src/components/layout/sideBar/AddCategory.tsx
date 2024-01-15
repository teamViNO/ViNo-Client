import * as SideBarStyle from '@/styles/layout/sideBar';
import PlusSvg from '@/assets/icons/plus.svg?react';

const AddCategory = () => {
  return (
    <SideBarStyle.CategoryWrap>
      <SideBarStyle.CategoryText>카테고리</SideBarStyle.CategoryText>
      <SideBarStyle.CategoryAddButton>
        <PlusSvg width={20} height={20} />
      </SideBarStyle.CategoryAddButton>
    </SideBarStyle.CategoryWrap>
  );
};

export default AddCategory;
