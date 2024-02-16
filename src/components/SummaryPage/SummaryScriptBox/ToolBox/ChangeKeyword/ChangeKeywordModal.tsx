import { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import CloseIcon from '@/assets/icons/close.svg?react';
import DownIcon from '@/assets/icons/down.svg?react';
import TransformationIcon from '@/assets/icons/transformation.svg?react';
import UpIcon from '@/assets/icons/up.svg?react';

import { getVideoAPI, updateVideoAPI } from '@/apis/videos';

import useDebounce from '@/hooks/useDebounce';

import { IVideoSubHeading } from '@/models/video';

import { ModalContainer } from '@/styles/SummaryPage';

import { toastListState } from '@/stores/toast';
import {
  summaryFindKeywordCountState,
  summarySearchIndexState,
  summaryVideoState,
} from '@/stores/summary';

import { getSearchIndex } from '@/utils/summary';

type Props = {
  onChange: (keyword: string) => void;
  onClose: () => void;
};

const ChangeKeywordModal = ({ onChange, onClose }: Props) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [summaryVideo, setSummaryVideo] = useRecoilState(summaryVideoState);
  const findKeywordCount = useRecoilValue(summaryFindKeywordCountState);
  const [searchIndex, setSearchIndex] = useRecoilState(summarySearchIndexState);
  const [toastList, setToastList] = useRecoilState(toastListState);

  const [holdPosition, setHoldPosition] = useState({ x: -1, y: -1 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [keyword, setKeyword] = useState('');
  const [replaceKeyword, setReplaceKeyword] = useState('');

  const refreshSummary = async () => {
    if (!summaryVideo) return;

    try {
      const { result } = (await getVideoAPI(summaryVideo.video_id)).data;

      setSummaryVideo(result);

      setToastList([
        ...toastList,
        { id: Date.now(), content: '단어 변경이 완료되었어요!' },
      ]);
    } catch (e) {
      console.error(e);
    }
  };

  const updateSubHeading = async (subheading: IVideoSubHeading[]) => {
    if (!summaryVideo) return;

    try {
      await updateVideoAPI(summaryVideo.video_id, { subheading });
    } catch (e) {
      console.error(e);
    }

    await refreshSummary();
  };

  const handleChangeSearchIndex = (index: number) => {
    setSearchIndex(getSearchIndex(index, findKeywordCount));
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (
      e.key === 'Enter' &&
      document.activeElement === inputRef.current
    ) {
      handleChangeSearchIndex(searchIndex + 1);
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

  const handleClickChangeAllButton = async () => {
    if (!summaryVideo) return;

    const regex = new RegExp(keyword, 'g');

    const subHeading = summaryVideo.subHeading.map(
      ({ name, content, ...others }) => {
        return {
          name: name.replace(regex, replaceKeyword),
          content: content.replace(regex, replaceKeyword),
          ...others,
        };
      },
    );

    await updateSubHeading(subHeading);

    onClose();
  };

  const handleClickChangeButton = async () => {
    if (!summaryVideo) return;

    const subHeadingList: IVideoSubHeading[] = [];
    let index = -1;

    for (const subHeading of summaryVideo.subHeading) {
      const splittedName = subHeading.name.split(keyword);
      const splittedContent = subHeading.content.split(keyword);
      let name = '';
      let content = '';

      // 제목 탐색 (탐색 로직 같음)
      for (let i = 0; i < splittedName.length; i++) {
        if (i === splittedName.length - 1) {
          name += splittedName[splittedName.length - 1];
          break;
        }
        index++;

        if (index === searchIndex) {
          name += splittedName[i] + replaceKeyword;
        } else {
          name += splittedName[i] + keyword;
        }
      }

      // 컨텐츠 탐색 (탐색 로직 같음)
      for (let i = 0; i < splittedContent.length; i++) {
        if (i === splittedContent.length - 1) {
          content += splittedContent[splittedContent.length - 1];
          break;
        }
        index++;

        if (index === searchIndex) {
          content += splittedContent[i] + replaceKeyword;
        } else {
          content += splittedContent[i] + keyword;
        }
      }

      subHeadingList.push({ ...subHeading, name, content });
    }

    await updateSubHeading(subHeadingList);
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
                  {findKeywordCount}
                </span>

                <div style={{ display: 'flex', gap: 4 }}>
                  <span className="nav-button">
                    <UpIcon
                      width={32}
                      height={16}
                      onClick={() => handleChangeSearchIndex(searchIndex - 1)}
                    />
                  </span>

                  <span className="nav-button">
                    <DownIcon
                      width={32}
                      height={16}
                      onClick={() => handleChangeSearchIndex(searchIndex + 1)}
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
                <input
                  type="text"
                  placeholder="수정할 단어를 입력해주세요"
                  value={replaceKeyword}
                  onChange={(e) => setReplaceKeyword(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 32, gap: 12, flexDirection: 'row' }}>
          <button
            className="transform all"
            disabled={findKeywordCount === 0}
            onClick={handleClickChangeAllButton}
          >
            전체 바꾸기
          </button>

          <button
            className="transform"
            disabled={findKeywordCount === 0}
            onClick={handleClickChangeButton}
          >
            바꾸기
          </button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default ChangeKeywordModal;
