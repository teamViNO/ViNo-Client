import { useRecoilState, useRecoilValue } from 'recoil';

import { updateVideoCategoryIdAPI } from '@/apis/videos';

import { IVideo } from '@/models/video';

import {
  summaryIsEditingViewState,
  summaryUpdateVideoState,
  summaryVideoState,
} from '@/stores/summary';
import { toastListState } from '@/stores/toast';

import { DetailBox } from '@/styles/SummaryPage';

import { formatDate } from '@/utils/date';

import { CategorySelectBox } from './CategorySelectBox';
import { NoteBox } from './NoteBox';
import { DescriptionBox } from './DescriptionBox';

type Props = {
  onRefresh: () => void;
};

const SummaryDetailBox = ({ onRefresh }: Props) => {
  const summaryVideo = useRecoilValue(summaryVideoState) as IVideo;
  const summaryUpdateVideo = useRecoilValue(summaryUpdateVideoState);
  const isEditingView = useRecoilValue(summaryIsEditingViewState);
  const [toastList, setToastList] = useRecoilState(toastListState);

  const subHeading = isEditingView
    ? summaryUpdateVideo?.subHeading || []
    : summaryVideo.subHeading;

  const createToast = (content: string) => {
    setToastList([...toastList, { id: Date.now(), content }]);
  };

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

        <iframe
          src={`https://www.youtube.com/embed/QXDiRtANAzA?${
            isEditingView && 'start=10&end=18&autoplay=1&disablekb=0'
          }`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            margin: '20px 0',
            width: '100%',
            aspectRatio: '16 / 9',
            borderRadius: 16,
          }}
        />

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
            <div key={item.id} className="subtitle">
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
