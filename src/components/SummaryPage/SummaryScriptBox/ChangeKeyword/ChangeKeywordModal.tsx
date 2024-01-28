import { useEffect, useRef, useState } from 'react';

import CloseIcon from '@/assets/icons/close.svg?react';
import DownIcon from '@/assets/icons/down.svg?react';
import TransformationIcon from '@/assets/icons/transformation.svg?react';
import UpIcon from '@/assets/icons/up.svg?react';

import useDebounce from '@/hooks/useDebounce';

import { ModalContainer } from '@/styles/SummaryPage';

type Props = {
  searchIndex: number;
  totalCount: number;
  onChange: (keyword: string) => void;
  onChangeSearchIndex: (index: number) => void;
  onClose: () => void;
};

const ChangeKeywordModal = ({
  searchIndex,
  totalCount,
  onChange,
  onChangeSearchIndex,
  onClose,
}: Props) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [holdPosition, setHoldPosition] = useState({ x: -1, y: -1 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [keyword, setKeyword] = useState('');

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (
      e.key === 'Enter' &&
      document.activeElement === inputRef.current
    ) {
      onChangeSearchIndex(searchIndex + 1);
    }
  };

  const handleMousedown: React.MouseEventHandler<HTMLDivElement> = ({
    screenX: x,
    screenY: y,
  }) => {
    setHoldPosition({ x: x - position.x, y: y - position.y });
  };

  const handleMouseup = () => {
    setHoldPosition({ x: -1, y: -1 });
  };

  const handleMousemove = ({ screenX, screenY }: MouseEvent) => {
    if (!boxRef.current || holdPosition.x < 0 || holdPosition.y < 0) return;

    const { width, height } = boxRef.current.getBoundingClientRect();
    const { innerWidth, innerHeight } = window;
    const maxX = Math.round((innerWidth - width) / 2);
    const maxY = Math.round((innerHeight - height) / 2);
    const x = Math.max(-maxX, Math.min(maxX, screenX - holdPosition.x));
    const y = Math.max(-maxY, Math.min(maxY, screenY - holdPosition.y));

    setPosition({ x, y });
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('mousemove', handleMousemove);
    window.addEventListener('mouseup', handleMouseup);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
      window.removeEventListener('mousemove', handleMousemove);
      window.removeEventListener('mouseup', handleMouseup);
    };
  });

  useDebounce(() => {
    onChange(keyword);
  }, keyword);

  return (
    <ModalContainer>
      <div
        ref={boxRef}
        className="box"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
        onMouseDown={handleMousedown}
      >
        <div>
          <div
            style={{ alignSelf: 'flex-end', cursor: 'pointer' }}
            onClick={onClose}
          >
            <CloseIcon width={28} height={28} />
          </div>

          <TransformationIcon width={56} height={56} />

          <h1 className="title">단어 바꾸기</h1>

          <span className="description">어떤 단어를 수정할까요?</span>
        </div>

        <div style={{ marginTop: 48, gap: 12 }}>
          <div className="group">
            <span className="group-title">찾는 단어</span>
            <div className="input-box">
              <div style={{ display: 'flex', flex: '1 1 auto' }}>
                <input
                  ref={inputRef}
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span className="count">
                  <span className="current">{searchIndex + 1}</span>/
                  {totalCount}
                </span>

                <div style={{ display: 'flex', gap: 4 }}>
                  <span className="nav-button">
                    <UpIcon
                      width={32}
                      height={16}
                      onClick={() => onChangeSearchIndex(searchIndex - 1)}
                    />
                  </span>

                  <span className="nav-button">
                    <DownIcon
                      width={32}
                      height={16}
                      onClick={() => onChangeSearchIndex(searchIndex + 1)}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="group">
            <span className="group-title">바꿀 단어</span>
            <div className="input-box">
              <div style={{ display: 'flex', flex: '1 1 auto' }}>
                <input type="text" placeholder="수정할 단어를 입력해주세요" />
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 32, gap: 12, flexDirection: 'row' }}>
          <button className="transform all">전체 바꾸기</button>
          <button className="transform">바꾸기</button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default ChangeKeywordModal;
