import { useMemo, useState } from 'react';

import DownIcon from '@/assets/icons/down.svg?react';

// 임시 타입
interface Item {
  id: number;
  text: string;
  items?: Item[];
}

type Props = {
  category: Item;
};

const DropdownItem = ({ category }: Props) => {
  const [isShow, setIsShow] = useState(false);

  const dynamicStyles = useMemo(() => {
    return {
      icon: {
        transform: isShow ? 'rotateZ(180deg)' : 'rotateZ(0deg)',
      },
      subCategory: {
        height: isShow ? (category.items?.length || 0) * 46 : 0,
      },
    };
  }, [category, isShow]);

  const handleItemClick = async (id: number) => {
    // API 요청
    console.log(id);
  };

  return (
    <>
      <li onClick={() => setIsShow(!isShow)}>
        <DownIcon width={18} height={18} style={dynamicStyles.icon} />

        {category.text}
      </li>

      <ul style={dynamicStyles.subCategory}>
        {category.items?.map((subCategory) => (
          <li
            key={subCategory.id}
            onClick={() => handleItemClick(subCategory.id)}
          >
            {subCategory.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default DropdownItem;
