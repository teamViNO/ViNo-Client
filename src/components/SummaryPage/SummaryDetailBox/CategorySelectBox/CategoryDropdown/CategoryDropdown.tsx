import { Dropdown } from '@/styles/SummaryPage';

import DropdownItem from './DropdownItem';
import { useRecoilValue } from 'recoil';
import { categoryState } from '@/stores/category';
import React from 'react';
import { ISelectedCategoryProps } from 'types/category';

interface ICategoryDropdownProp {
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<ISelectedCategoryProps>
  >;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CategoryDropdown = ({
  setSelectedCategory,
  setIsOpen,
}: ICategoryDropdownProp) => {
  const categories = useRecoilValue(categoryState);
  return (
    <Dropdown onClick={(e) => e.stopPropagation()}>
      <ul>
        {categories.map((category) => (
          <DropdownItem
            key={category.categoryId}
            category={category}
            setSelectedCategory={setSelectedCategory}
            setIsOpen={setIsOpen}
          />
        ))}
      </ul>
    </Dropdown>
  );
};

export default CategoryDropdown;
