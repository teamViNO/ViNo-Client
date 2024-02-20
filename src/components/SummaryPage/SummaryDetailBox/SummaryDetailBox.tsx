import { useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { updateVideoCategoryIdAPI } from '@/apis/videos';

import { IVideo } from '@/models/video';

import {
  summaryIsEditingViewState,
  summaryPlaySubHeadingIdState,
  summaryUpdateVideoState,
  summaryVideoState,
  summaryVideoTimeState,
} from '@/stores/summary';

import { DetailBox } from '@/styles/SummaryPage';

import { formatDate } from '@/utils/date';

import { CategorySelectBox } from './CategorySelectBox';
import { NoteBox } from './NoteBox';
import { DescriptionBox } from './DescriptionBox';
import useCreateToast from '@/hooks/useCreateToast';

type Props = {
  onRefresh: () => void;
};

const SummaryDetailBox = ({ onRefresh }: Props) => {
  const player = useRef<YT.Player>();

  const { createToast } = useCreateToast();
  const summaryVideo = useRecoilValue(summaryVideoState) as IVideo;
  const summaryUpdateVideo = useRecoilValue(summaryUpdateVideoState);
  const setSummaryVideoTime = useSetRecoilState(summaryVideoTimeState);
  const isEditingView = useRecoilValue(summaryIsEditingViewState);
  const [playSubHeadingId, setPlaySubHeadingId] = useRecoilState(
    summaryPlaySubHeadingIdState,
  );

  const subHeading = isEditingView
    ? summaryUpdateVideo?.subHeading || []
    : summaryVideo.subHeading;

  const handleSelectCategory = async (category_id: number, name?: string) => {
    try {
      await updateVideoCategoryIdAPI(category_id, {
        video_id: [summaryVideo.video_id],
      });

      createToast(`[${name}] 카테고리로 이동되었어요!`);
      onRefresh();
    } catch (e) {
      console.error(e);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMessage = (e: any) => {
    if (e.origin === 'https://www.youtube.com') {
      try {
        const { info } = JSON.parse(e.data);

        if (!info) return;

        setPlaySubHeadingId((id) => {
          const item = subHeading.find((s) => s.id === id);

          // END or PAUSE
          if ([0, 2].includes(info.playerState)) {
            return -1;
          }

          if (item) {
            if (
              item.start_time > info.currentTime ||
              info.currentTime > item.end_time
            )
              return -1;
          }

          return id;
        });

        setSummaryVideoTime(info.currentTime);
      } catch (e) {
        console.error(e);
      }
    }
  };

  useEffect(() => {
    return () => {
      setSummaryVideoTime(0);
      setPlaySubHeadingId(-1);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (player.current) return;

    player.current = new YT.Player('player', {
      videoId: summaryVideo.youtube_id,
    });

    window.onmessage = handleMessage;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [summaryVideo]);

  useEffect(() => {
    if (player.current) {
      if (playSubHeadingId > -1) {
        const item = subHeading.find((s) => s.id === playSubHeadingId);

        if (item) {
          player.current.seekTo(item.start_time, true);
          player.current.playVideo();
        }
      } else if (playSubHeadingId === -2) {
        // 영상 멈추기
        player.current.pauseVideo();

        setPlaySubHeadingId(-1);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playSubHeadingId]);

  return (
    <div
      style={{
        height: '100%',
        overflowY: 'auto',
        flex: '1 1 555px',
      }}
    >
      <DetailBox className={isEditingView ? 'disabled' : ''}>
        <span className="created_at">
          {formatDate(summaryVideo.updated_at)}
        </span>

        <span className="youtube-video-title">{summaryVideo.title || '-'}</span>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {summaryVideo.tag.map((hashtag) => (
            <span key={hashtag.name} className="hashtag">
              #{hashtag.name}
            </span>
          ))}
        </div>

        <div id="player" />

        <CategorySelectBox
          disabled={isEditingView}
          selectedCategoryId={summaryVideo.category_id}
          onSelect={handleSelectCategory}
        />

        <DescriptionBox />

        <div
          style={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {subHeading.map((item, i) => (
            <div
              key={item.id}
              className={`subtitle ${
                playSubHeadingId > -1 &&
                playSubHeadingId !== item.id &&
                'disabled'
              }`}
              onClick={() => setPlaySubHeadingId(item.id)}
            >
              <span className="subtitle-index">{i + 1}</span>
              <span className="subtitle-text">{item.name}</span>
            </div>
          ))}
        </div>

        <NoteBox onRefresh={onRefresh} />
      </DetailBox>
    </div>
  );
};

export default SummaryDetailBox;
