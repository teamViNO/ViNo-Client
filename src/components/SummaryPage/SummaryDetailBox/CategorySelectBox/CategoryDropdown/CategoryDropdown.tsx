import { Dropdown } from '@/styles/SummaryPage';

import DropdownItem from './DropdownItem';

// 임시 타입
interface Item {
  id: number;
  text: string;
  items?: Item[];
}

type Props = {
  categoryList: Item[];
};

const CategoryDropdown = ({ categoryList }: Props) => {
  return (
    <Dropdown onClick={(e) => e.stopPropagation()}>
      <ul>
        {categoryList.map((category) => (
          <DropdownItem key={category.id} category={category} />
        ))}
      </ul>
    </Dropdown>
  );
};

export default CategoryDropdown;
