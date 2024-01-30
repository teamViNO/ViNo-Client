import { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import DownIcon from '@/assets/icons/down.svg?react';
import SearchIcon from '@/assets/icons/search.svg?react';
import UpIcon from '@/assets/icons/up.svg?react';

import useDebounce from '@/hooks/useDebounce';

import { summaryTransformModalState } from '@/stores/modal';
import { summarySearchIsOpenState } from '@/stores/ui';

import { SearchKeywordBox } from '@/styles/SummaryPage';

type Props = {
  searchIndex: number;
  totalCount: number;
  onChange: (keyword: string) => void;
  onChangeSearchIndex: (index: number) => void;
};

const SearchKeyword = ({
  searchIndex,
  totalCount,
  onChange,
  onChangeSearchIndex,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useRecoilState(summarySearchIsOpenState);
  const modalIsOpen = useRecoilValue(summaryTransformModalState);
  const [keyword, setKeyword] = useState('');

  const dynamicStyles = {
    box: {
      padding: isOpen ? '8px 52px 8px 16px' : '8px 0',
      right: isOpen ? -92 : 0,
      width: isOpen ? 400 : 38,
    },
    button: {
      transform: isOpen ? 'rotateZ(360deg)' : 'rotateZ(0deg)',
    },
  };

  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (
        !modalIsOpen &&
        e.key === 'f' &&
        (e.ctrlKey || e.metaKey) &&
        !e.shiftKey
      ) {
        e.preventDefault();

        setIsOpen(true);

        inputRef.current?.focus();
      } else if (
        e.key === 'Escape' &&
        document.activeElement === inputRef.current
      ) {
        setIsOpen(false);
      } else if (
        e.key === 'Enter' &&
        document.activeElement === inputRef.current
      ) {
        onChangeSearchIndex(searchIndex + 1);
      }
    },
    [searchIndex, modalIsOpen, setIsOpen, onChangeSearchIndex],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [handleKeydown]);

  useDebounce(() => {
    onChange(keyword);
  }, keyword);

  return (
    <SearchKeywordBox style={dynamicStyles.box}>
      <div style={{ flex: '1 1 auto' }}>
        <input
          ref={inputRef}
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span className="count">
          <span className="current">{searchIndex + 1}</span>/{totalCount}
        </span>

        <div style={{ display: 'flex', gap: 4 }}>
          <span className="nav-button">
            <UpIcon
              width={16}
              height={16}
              onClick={() => onChangeSearchIndex(searchIndex - 1)}
            />
          </span>

          <span className="nav-button">
            <DownIcon
              width={16}
              height={16}
              onClick={() => onChangeSearchIndex(searchIndex + 1)}
            />
          </span>
        </div>
      </div>

      <span
        className="icon-button"
        style={dynamicStyles.button}
        onClick={() => setIsOpen(!isOpen)}
      >
        <SearchIcon width={18} height={18} />
      </span>
    </SearchKeywordBox>
  );
};

export default SearchKeyword;
