import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import PlayIcon from '@/assets/icons/play.svg?react';

import { IVideo } from '@/models/video';

import { summaryTransformModalState } from '@/stores/modal';
import { summaryBoxWidthState, summarySearchIsOpenState } from '@/stores/ui';
import {
  summaryFindKeywordCountState,
  summarySearchIndexState,
  summaryVideoState,
} from '@/stores/summary';

import { ScriptBox } from '@/styles/SummaryPage';

import { escapeHTML } from '@/utils/string';

import { ToolBox } from './ToolBox';
import ResizeThumb from './ResizeThumb';

const SummaryScriptBox = () => {
  const ref = useRef<HTMLDivElement>(null);
  const summaryVideo = useRecoilValue(summaryVideoState) as IVideo;
  const [searchIndex, setSearchIndex] = useRecoilState(summarySearchIndexState);
  const [findKeywordCount, setFindKeywordCount] = useRecoilState(
    summaryFindKeywordCountState,
  );
  const searchIsOpen = useRecoilValue(summarySearchIsOpenState);
  const transformModalIsOpen = useRecoilValue(summaryTransformModalState);
  const [width, setWidth] = useRecoilState(summaryBoxWidthState);

  const [keyword, setKeyword] = useState('');

  const updateFindKeywordCount = useCallback(() => {
    if (keyword === '') {
      setFindKeywordCount(0);
    } else {
      setFindKeywordCount(
        summaryVideo.subHeading.reduce(
          (total, { name, content }) =>
            total +
            (name.split(keyword).length - 1) +
            (content.split(keyword).length - 1),
          0,
        ),
      );
    }
  }, [summaryVideo, keyword, setFindKeywordCount]);

  const handleChangeKeyword = (keyword: string) => {
    setKeyword(keyword);
    updateFindKeywordCount();
  };

  const formattedScriptList = useMemo(() => {
    return summaryVideo.subHeading.map(({ name, content, ...others }) => {
      if ((searchIsOpen || transformModalIsOpen) && keyword !== '') {
        name = name
          .split(keyword)
          .map((s) => escapeHTML(s))
          .join(`<mark>${escapeHTML(keyword)}</mark>`);

        content = content
          .split(keyword)
          .map((s) => escapeHTML(s))
          .join(`<mark>${escapeHTML(keyword)}</mark>`);
      } else {
        name = escapeHTML(name);
        content = escapeHTML(content);
      }

      name = name.replace(/\n/g, '<br>');
      content = content.replace(/\n/g, '<br>');

      return {
        content,
        name,
        ...others,
      };
    });
  }, [summaryVideo, keyword, searchIsOpen, transformModalIsOpen]);

  useEffect(() => {
    if (keyword === '' || !findKeywordCount) {
      setSearchIndex(-1);
    } else {
      setSearchIndex(0);
    }
  }, [keyword, findKeywordCount, setSearchIndex]);

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

  useEffect(() => {
    updateFindKeywordCount();
  }, [updateFindKeywordCount]);

  return (
    <ScriptBox style={{ width }}>
      <ToolBox onChangeKeyword={handleChangeKeyword} />

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

                  <span
                    className="script-title"
                    dangerouslySetInnerHTML={{ __html: script.name }}
                  />
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
