import { useState } from 'react';
import { useRecoilValue } from 'recoil';

import DownIcon from '@/assets/icons/down.svg?react';
import OpenFileIcon from '@/assets/icons/open-file.svg?react';

import useOutsideClick from '@/hooks/useOutsideClick';

import { categoryState } from '@/stores/category';
import { userTokenState } from '@/stores/user';

import { CategoryDropdown } from './CategoryDropdown';

type Props = {
  disabled?: boolean;
  selectedCategoryId?: number;
  onSelect: (categoryId: number, categoryName?: string) => void;
};

const CategorySelectBox = ({
  disabled,
  selectedCategoryId,
  onSelect,
}: Props) => {
  const userToken = useRecoilValue(userTokenState);
  const categories = useRecoilValue(categoryState);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(selectedCategoryId);

  const selectedCategory =
    selectedId &&
    categories
      .reduce(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (acc: any[], category) => [
          ...acc,
          { ...category },
          ...category.subFolders,
        ],
        [],
      )
      .find((category) => category.categoryId === selectedId);

  // 다른 영역 클릭 시 dropdown 안보여지게 하기
  const [ref] = useOutsideClick<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  const handleBoxClick = () => {
    if (!userToken || disabled) return;

    setIsOpen(!isOpen);
  };

  const handleSelect = (categoryId: number) => {
    setSelectedId(categoryId);
    setIsOpen(false);
  };

  const handleClick = () => {
    if (!selectedCategory || selectedId === selectedCategoryId || disabled)
      return;

    onSelect(selectedCategory.categoryId, selectedCategory.name);
  };

  return (
    <div ref={ref} style={{ display: 'flex', gap: 8 }}>
      <div
        style={{
          position: 'relative',
          flex: '1 1 auto',
        }}
        onClick={handleBoxClick}
      >
        <div
          className="select-box"
          style={{ cursor: disabled ? 'default' : 'pointer' }}
        >
          <span>
            {userToken
              ? selectedCategory
                ? selectedCategory.name
                : '어떤 카테고리에 넣을까요?'
              : '로그인하고 요약한 영상을 아카이빙해요!'}
          </span>

          <DownIcon width={18} height={18} />
        </div>

        {isOpen && (
          <CategoryDropdown selectedId={selectedId} onSelect={handleSelect} />
        )}
      </div>

      <span
        className={`icon-button ${(!userToken || disabled) && 'disabled'} ${
          selectedCategoryId !== selectedId ? 'changed' : ''
        }`}
        onClick={handleClick}
      >
        <OpenFileIcon width={28} height={28} />
      </span>
    </div>
  );
};

export default CategorySelectBox;
