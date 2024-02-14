import { useState } from 'react';
import { IFolderProps } from 'types/category';

import DownIcon from '@/assets/icons/down.svg?react';

import { DropdownTopCategoryName } from '@/styles/SummaryPage';

type Props = {
  category: IFolderProps;
  onSelect: (categoryId: number) => void;
};

const DropdownItem = ({ category, onSelect }: Props) => {
  const [isShow, setIsShow] = useState(false);

  const dynamicStyles = {
    icon: {
      transform: isShow ? 'rotateZ(180deg)' : 'rotateZ(0deg)',
    },
    subCategory: {
      height: isShow ? (category.subFolders.length || 0) * 46 : 0,
    },
  };

  return (
    <>
      <li>
        <DownIcon
          width={18}
          height={18}
          style={dynamicStyles.icon}
          onClick={() => setIsShow(!isShow)}
        />

        <DropdownTopCategoryName onClick={() => onSelect(category.categoryId)}>
          {category.name}
        </DropdownTopCategoryName>
      </li>

      <ul style={dynamicStyles.subCategory}>
        {category.subFolders.map((subFolder) => (
          <li
            key={subFolder.categoryId}
            onClick={() => onSelect(subFolder.categoryId)}
          >
            {subFolder.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default DropdownItem;
