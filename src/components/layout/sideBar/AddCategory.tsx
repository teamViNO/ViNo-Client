import * as AddCategoryStyle from '@/styles/layout/sideBar/AddCategory.style';
import PlusSvg from '@/assets/icons/plus.svg?react';

const AddCategory = () => {
  return (
    <AddCategoryStyle.Wrap>
      <AddCategoryStyle.Text>카테고리</AddCategoryStyle.Text>
      <AddCategoryStyle.Button>
        <PlusSvg width={20} height={20} />
      </AddCategoryStyle.Button>
    </AddCategoryStyle.Wrap>
  );
};

export default AddCategory;
