import { useState } from 'react';

import DownIcon from '@/assets/icons/down.svg?react';
import { IFolderProps, ISelectedCategoryProps } from 'types/category';
import { DropdownTopCategoryName } from '@/styles/SummaryPage';

interface ICategoryDropdownProp {
  category: IFolderProps;
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<ISelectedCategoryProps>
  >;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IItemClickProps {
  name: string;
  categoryId: number;
}

const DropdownItem = ({
  category,
  setSelectedCategory,
  setIsOpen,
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
    setSelectedCategory({
      name,
      categoryId,
    });
    // API 요청
    console.log('API 요청');
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
