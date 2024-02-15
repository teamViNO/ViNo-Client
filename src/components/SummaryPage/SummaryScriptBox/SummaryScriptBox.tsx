import { useEffect, useMemo, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import ModifyIcon from '@/assets/icons/modify.svg?react';
import PlayIcon from '@/assets/icons/play.svg?react';

import { IVideo } from '@/models/video';

import { summaryTransformModalState } from '@/stores/modal';
import { summaryBoxWidthState, summarySearchIsOpenState } from '@/stores/ui';
import { summaryVideoState } from '@/stores/summary';

import { ScriptBox } from '@/styles/SummaryPage';

import { escapeHTML } from '@/utils/string';

import Indicator from './Indicator';
import ResizeThumb from './ResizeThumb';
import { SearchKeyword } from './SearchKeyword';
import { ChangeKeyword } from './ChangeKeyword';

const SummaryScriptBox = () => {
  const ref = useRef<HTMLDivElement>(null);
  const summaryVideo = useRecoilValue(summaryVideoState) as IVideo;

  const searchIsOpen = useRecoilValue(summarySearchIsOpenState);
  const transformModalIsOpen = useRecoilValue(summaryTransformModalState);
  const [width, setWidth] = useRecoilState(summaryBoxWidthState);
  const [focusId, setFocusId] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [searchIndex, setSearchIndex] = useState(0);

  const handleChangeSearchIndex = (index: number) => {
    if (findKeywordCount === 0) {
      setSearchIndex(-1);
    } else if (index < 0) {
      setSearchIndex(findKeywordCount - 1);
    } else if (index >= findKeywordCount) {
      setSearchIndex(0);
    } else {
      setSearchIndex(index);
    }
  };

  const formattedScriptList = useMemo(() => {
    return summaryVideo.subHeading.map(({ content, ...others }) => {
      if ((searchIsOpen || transformModalIsOpen) && keyword !== '') {
        content = content
          .split(keyword)
          .map((s) => escapeHTML(s))
          .join(`<mark>${escapeHTML(keyword)}</mark>`);
      } else {
        content = escapeHTML(content);
      }

      content = content.replace(/\n/g, '<br>');

      return {
        content,
        ...others,
      };
    });
  }, [summaryVideo, keyword, searchIsOpen, transformModalIsOpen]);

  const findKeywordCount = useMemo(() => {
    if (keyword === '') return 0;

    return summaryVideo.subHeading.reduce(
      (total, { content }) => total + (content.split(keyword).length - 1),
      0,
    );
  }, [summaryVideo, keyword]);

  useEffect(() => {
    if (keyword === '' || !findKeywordCount) {
      setSearchIndex(-1);
    } else {
      setSearchIndex(0);
    }
  }, [searchIsOpen, transformModalIsOpen, keyword, findKeywordCount]);

  useEffect(() => {
    document.querySelectorAll('mark').forEach((markEl, i) => {
      if (i === searchIndex && ref.current) {
        markEl.className = 'active';

        const { top: markTop } = markEl.getBoundingClientRect();

        ref.current.scrollTo({
          top: markTop + ref.current.scrollTop - window.innerHeight / 3,
          behavior: 'smooth',
        });
      } else {
        markEl.className = '';
      }
    });
  }, [searchIsOpen, transformModalIsOpen, keyword, searchIndex]);

  return (
    <ScriptBox style={{ width }}>
      <div className="tools">
        <Indicator
          list={summaryVideo.subHeading}
          focusId={focusId}
          onChange={setFocusId}
        />

        <div style={{ display: 'flex', gap: 8 }}>
          <SearchKeyword
            searchIndex={searchIndex}
            totalCount={findKeywordCount}
            onChange={setKeyword}
            onChangeSearchIndex={handleChangeSearchIndex}
          />

          <ChangeKeyword
            searchIndex={searchIndex}
            totalCount={findKeywordCount}
            onChange={setKeyword}
            onChangeSearchIndex={handleChangeSearchIndex}
          />

          <span className="icon-button">
            <ModifyIcon width={18} height={18} />
          </span>
        </div>
      </div>

      <div ref={ref} style={{ height: 'calc(100% - 78px)', overflowY: 'auto' }}>
        <div className="script-container">
          {formattedScriptList.map((script) => (
            <div key={script.id}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span className="play-button">
                    <PlayIcon width={36} height={36} />
                  </span>

                  <span className="script-title">{script.name}</span>
                </div>

                <span className="script-badge">
                  {script.start_time}-{script.end_time}
                </span>
              </div>

              <div
                className="script-content"
                dangerouslySetInnerHTML={{ __html: script.content }}
              />
            </div>
          ))}
        </div>
      </div>

      <ResizeThumb width={width} onChange={setWidth} />
    </ScriptBox>
  );
};

export default SummaryScriptBox;
