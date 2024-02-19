import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { getVideoAPI, updateVideoAPI } from '@/apis/videos';

import ModifyIcon from '@/assets/icons/modify.svg?react';

import { IVideo } from '@/models/video';

import {
  summaryIsEditingViewState,
  summaryPlaySubHeadingIdState,
  summaryUpdateVideoState,
  summaryVideoState,
} from '@/stores/summary';

import Indicator from './Indicator';
import { SearchKeyword } from './SearchKeyword';
import { ChangeKeyword } from './ChangeKeyword';
import useCreateToast from '@/hooks/useCreateToast';

type Props = {
  onRefresh: () => void;
  onChangeKeyword: (keyword: string) => void;
};

const ToolBox = ({ onRefresh, onChangeKeyword }: Props) => {
  const summaryVideo = useRecoilValue(summaryVideoState) as IVideo;
  const setPlaySubHeadingId = useSetRecoilState(summaryPlaySubHeadingIdState);
  const [summaryUpdateVideo, setSummaryUpdateVideo] = useRecoilState(
    summaryUpdateVideoState,
  );
  const [isEditingView, setIsEditingView] = useRecoilState(
    summaryIsEditingViewState,
  );
  const { createToast } = useCreateToast();

  const [originalSummary, setOriginalSummary] = useState<IVideo | null>(null);

  const handleClickModifyIcon = () => {
    setPlaySubHeadingId(-1);
    setIsEditingView(true);
    setSummaryUpdateVideo({ ...summaryVideo });
  };

  const handleClickPrevButton = () => {
    if (!originalSummary || !summaryUpdateVideo) return;

    const { description } = originalSummary;
    const subHeading = summaryUpdateVideo.subHeading.map((item, i) => {
      const { name, content } = originalSummary.subHeading[i];
      return {
        ...item,
        name,
        content,
      };
    });

    setSummaryUpdateVideo({ ...summaryVideo, description, subHeading });
    createToast('이전 버전을 불러왔어요!');
  };

  const handleClickSaveButton = async () => {
    if (!summaryUpdateVideo) return;
    const { title, description, subHeading: subheading } = summaryUpdateVideo;

    try {
      await updateVideoAPI(summaryVideo.video_id, {
        title,
        description,
        subheading,
      });

      onRefresh();
      setIsEditingView(false);
      createToast('내용 수정이 완료되었어요!');
    } catch (e) {
      console.error(e);
    }
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

  useEffect(() => {
    return () => {
      setIsEditingView(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="tools">
      {isEditingView ? (
        <>
          <div />

          <div style={{ display: 'flex', gap: 8 }}>
            <button
              className="edit-button prev"
              onClick={handleClickPrevButton}
            >
              이전 버전
            </button>
            <button
              className="edit-button save"
              onClick={handleClickSaveButton}
            >
              수정하기
            </button>
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
