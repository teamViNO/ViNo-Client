import { useRecoilValue } from 'recoil';

import { Dropdown } from '@/styles/SummaryPage';

import { categoryState } from '@/stores/category';

import DropdownItem from './DropdownItem';

type Props = {
  onSelect: (categoryId: number) => void;
};

const CategoryDropdown = ({ onSelect }: Props) => {
  const categories = useRecoilValue(categoryState);

  return (
    <Dropdown onClick={(e) => e.stopPropagation()}>
      <ul>
        {categories.map((category) => (
          <DropdownItem
            key={category.categoryId}
            category={category}
            onSelect={onSelect}
          />
        ))}
      </ul>
    </Dropdown>
  );
};

export default CategoryDropdown;
