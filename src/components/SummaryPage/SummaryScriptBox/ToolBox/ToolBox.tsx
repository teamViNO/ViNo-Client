import { useCallback, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { getVideoAPI } from '@/apis/videos';

import ModifyIcon from '@/assets/icons/modify.svg?react';

import { IVideo } from '@/models/video';

import {
  summaryIsEditingViewState,
  summaryUpdateVideoState,
  summaryVideoState,
} from '@/stores/summary';
import { toastListState } from '@/stores/toast';

import Indicator from './Indicator';
import { SearchKeyword } from './SearchKeyword';
import { ChangeKeyword } from './ChangeKeyword';

type Props = {
  onChangeKeyword: (keyword: string) => void;
};

const ToolBox = ({ onChangeKeyword }: Props) => {
  const summaryVideo = useRecoilValue(summaryVideoState) as IVideo;
  const setSummaryUpdateVideo = useSetRecoilState(summaryUpdateVideoState);
  const [isEditingView, setIsEditingView] = useRecoilState(
    summaryIsEditingViewState,
  );
  const [toastList, setToastList] = useRecoilState(toastListState);

  const [originalSummary, setOriginalSummary] = useState<IVideo | null>(null);

  const createToast = (content: string) => {
    setToastList([...toastList, { id: Date.now(), content }]);
  };

  const handleClickModifyIcon = () => {
    setIsEditingView(true);
    setSummaryUpdateVideo({ ...summaryVideo });
  };

  const handleClickPrevButton = async () => {
    if (!originalSummary) return;

    const { description, subHeading } = originalSummary;

    setSummaryUpdateVideo({ ...summaryVideo, description, subHeading });
    createToast('이전 버전을 불러왔어요!');
  };

  useEffect(() => {
    const callAPI = async () => {
      try {
        const { result } = (
          await getVideoAPI(summaryVideo.video_id, 'original')
        ).data;

        setOriginalSummary(result);
      } catch (e) {
        console.error(e);
      }
    };

    callAPI();
  }, [summaryVideo]);

  return (
    <div className="tools">
      {isEditingView ? (
        <>
          <div>대충 히스토리 버튼</div>

          <div style={{ display: 'flex', gap: 8 }}>
            <button
              className="edit-button prev"
              onClick={handleClickPrevButton}
            >
              이전 버전
            </button>
            <button className="edit-button save">수정하기</button>
          </div>
        </>
      ) : (
        <>
          <Indicator
            list={summaryVideo.subHeading}
            focusId={1}
            onChange={() => {}}
          />

          <div style={{ display: 'flex', gap: 8 }}>
            <SearchKeyword onChange={onChangeKeyword} />

            <ChangeKeyword onChange={onChangeKeyword} />

            <span className="icon-button" onClick={handleClickModifyIcon}>
              <ModifyIcon width={18} height={18} />
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default ToolBox;
