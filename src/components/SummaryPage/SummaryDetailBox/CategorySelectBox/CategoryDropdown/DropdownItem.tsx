import { useState } from 'react';

import DownIcon from '@/assets/icons/down.svg?react';
import { IFolderProps, ISelectedCategoryProps } from 'types/category';
import { DropdownTopCategoryName } from '@/styles/SummaryPage';

interface ICategoryDropdownProp {
  category: IFolderProps;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleSelectCategory: ({ name, categoryId }: ISelectedCategoryProps) => void;
}

interface IItemClickProps {
  name: string;
  categoryId: number;
}

const DropdownItem = ({
  category,
  setIsOpen,
  handleSelectCategory,
}: ICategoryDropdownProp) => {
  const [isShow, setIsShow] = useState(false);

  const dynamicStyles = {
    icon: {
      transform: isShow ? 'rotateZ(180deg)' : 'rotateZ(0deg)',
    },
    subCategory: {
      height: isShow ? (category.subFolders.length || 0) * 46 : 0,
    },
  };

  const handleItemClick = async ({ name, categoryId }: IItemClickProps) => {
    handleSelectCategory({ name, categoryId });
    setIsOpen(false);
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
        <DropdownTopCategoryName
          onClick={() =>
            handleItemClick({
              name: category.name,
              categoryId: category.categoryId,
            })
          }
        >
          {category.name}
        </DropdownTopCategoryName>
      </li>

      <ul style={dynamicStyles.subCategory}>
        {category.subFolders.map((subFolder) => (
          <li
            key={subFolder.categoryId}
            onClick={() =>
              handleItemClick({
                name: subFolder.name,
                categoryId: subFolder.categoryId,
              })
            }
          >
            {subFolder.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default DropdownItem;
