import { useRecoilValue } from 'recoil';

import { Dropdown } from '@/styles/SummaryPage';

import { categoryState } from '@/stores/category';

import DropdownItem from './DropdownItem';

type Props = {
  selectedId?: number;
  onSelect: (categoryId: number) => void;
};

const CategoryDropdown = ({ selectedId, onSelect }: Props) => {
  const categories = useRecoilValue(categoryState);

  return (
    <Dropdown onClick={(e) => e.stopPropagation()}>
      <ul>
        {categories.map((category) => (
          <DropdownItem
            key={category.categoryId}
            category={category}
            selectedId={selectedId}
            onSelect={onSelect}
          />
        ))}
      </ul>
    </Dropdown>
  );
};

export default CategoryDropdown;
