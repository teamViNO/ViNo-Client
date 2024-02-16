import { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { IVideo } from '@/models/video';

import { summaryTransformModalState } from '@/stores/modal';
import { summaryBoxWidthState, summarySearchIsOpenState } from '@/stores/ui';
import {
  summaryFindKeywordCountState,
  summaryIsEditingViewState,
  summarySearchIndexState,
  summaryVideoState,
} from '@/stores/summary';

import { ScriptBox } from '@/styles/SummaryPage';

import { ToolBox } from './ToolBox';
import ResizeThumb from './ResizeThumb';
import { ScriptViewer } from './ScriptViewer';
import { ScriptEditer } from './ScriptEditer';

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
  const isEditingView = useRecoilValue(summaryIsEditingViewState);
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
      <ToolBox onRefresh={onRefresh} onChangeKeyword={handleChangeKeyword} />

      <div ref={ref} style={{ height: 'calc(100% - 78px)', overflowY: 'auto' }}>
        {isEditingView ? <ScriptEditer /> : <ScriptViewer keyword={keyword} />}
      </div>

      <ResizeThumb width={width} onChange={setWidth} />
    </ScriptBox>
  );
};

export default SummaryScriptBox;
