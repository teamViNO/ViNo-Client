import { Dropdown } from '@/styles/SummaryPage';

import DropdownItem from './DropdownItem';
import { useRecoilValue } from 'recoil';
import { categoryState } from '@/stores/category';
import React from 'react';
import { ISelectedCategoryProps } from 'types/category';

interface ICategoryDropdownProp {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleSelectCategory: ({ name, categoryId }: ISelectedCategoryProps) => void;
}

const CategoryDropdown = ({
  setIsOpen,
  handleSelectCategory,
}: ICategoryDropdownProp) => {
  const categories = useRecoilValue(categoryState);
  return (
    <Dropdown onClick={(e) => e.stopPropagation()}>
      <ul>
        {categories.map((category) => (
          <DropdownItem
            key={category.categoryId}
            category={category}
            setIsOpen={setIsOpen}
            handleSelectCategory={handleSelectCategory}
          />
        ))}
      </ul>
    </Dropdown>
  );
};

export default CategoryDropdown;
