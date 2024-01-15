import { useState } from 'react';

import DownIcon from '@/assets/icons/down.svg?react';
import OpenFileIcon from '@/assets/icons/open-file.svg?react';

import useOutsideClick from '@/hooks/useOutsideClick';

import { CategoryDropdown } from './CategoryDropdown';

const CategorySelectBox = () => {
  const categoryList = [
    {
      id: 1,
      text: '기획',
      items: [
        { id: 2, text: '마케팅' },
        { id: 3, text: '트렌드' },
        { id: 4, text: '기업' },
        { id: 5, text: '용어' },
      ],
    },
    {
      id: 6,
      text: '디자인',
      items: [
        { id: 7, text: 'AAA' },
        { id: 8, text: 'BBB' },
        { id: 9, text: 'CCC' },
        { id: 10, text: 'DDD' },
      ],
    },
  ];

  const [isLogin] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  // 다른 영역 클릭 시 dropdown 안보여지게 하기
  const [ref] = useOutsideClick<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  const handleBoxClick = () => {
    if (!isLogin) return;

    setIsOpen(!isOpen);
  };

  return (
    <div ref={ref} style={{ display: 'flex', gap: 8 }} onClick={handleBoxClick}>
      <div style={{ position: 'relative', flex: '1 1 auto' }}>
        <div className="select-box">
          <span>
            {isLogin
              ? '어떤 카테고리에 넣을까요?'
              : '로그인하고 요약한 영상을 아카이빙해요!'}
          </span>

          <DownIcon width={18} height={18} />
        </div>

        {isOpen && <CategoryDropdown categoryList={categoryList} />}
      </div>

      <span className={`icon-button ${!isLogin && 'disabled'}`}>
        <OpenFileIcon width={28} height={28} />
      </span>
    </div>
  );
};

export default CategorySelectBox;
