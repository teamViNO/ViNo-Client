import { useEffect, useMemo, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import ModifyIcon from '@/assets/icons/modify.svg?react';
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

import Indicator from './Indicator';
import ResizeThumb from './ResizeThumb';
import { SearchKeyword } from './SearchKeyword';
import { ChangeKeyword } from './ChangeKeyword';

type Props = {
  onRefresh: () => void;
};

const SummaryScriptBox = ({ onRefresh }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const summaryVideo = useRecoilValue(summaryVideoState) as IVideo;
  const [searchIndex, setSearchIndex] = useRecoilState(summarySearchIndexState);
  const [findKeywordCount, setFindKeywordCount] = useRecoilState(
    summaryFindKeywordCountState,
  );

  const searchIsOpen = useRecoilValue(summarySearchIsOpenState);
  const transformModalIsOpen = useRecoilValue(summaryTransformModalState);
  const [width, setWidth] = useRecoilState(summaryBoxWidthState);
  const [focusId, setFocusId] = useState(1);
  const [keyword, setKeyword] = useState('');

  const handleChangeKeyword = (keyword: string) => {
    if (keyword === '') {
      setFindKeywordCount(0);
    } else {
      setFindKeywordCount(
        summaryVideo.subHeading.reduce(
          (total, { content }) => total + (content.split(keyword).length - 1),
          0,
        ),
      );
    }

    setKeyword(keyword);
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

  return (
    <ScriptBox style={{ width }}>
      <div className="tools">
        <Indicator
          list={summaryVideo.subHeading}
          focusId={focusId}
          onChange={setFocusId}
        />

        <div style={{ display: 'flex', gap: 8 }}>
          <SearchKeyword onChange={handleChangeKeyword} />

          <ChangeKeyword onChange={handleChangeKeyword} />

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
