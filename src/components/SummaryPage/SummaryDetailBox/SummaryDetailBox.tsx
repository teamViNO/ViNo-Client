import { useRecoilValue } from 'recoil';

import { updateVideoCategoryIdAPI } from '@/apis/videos';

import { summaryVideoState } from '@/stores/summary';

import { DetailBox } from '@/styles/SummaryPage';

import { formatDate } from '@/utils/date';

import { CategorySelectBox } from './CategorySelectBox';
import { NoteBox } from './NoteBox';

type Props = {
  onRefresh: () => void;
};

const SummaryDetailBox = ({ onRefresh }: Props) => {
  const summaryVideo = useRecoilValue(summaryVideoState);

  const handleSelectCategory = async (category_id: number) => {
    if (!summaryVideo) return;

    try {
      await updateVideoCategoryIdAPI(summaryVideo.video_id, category_id);

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
      <DetailBox>
        <span className="created_at">
          {formatDate(summaryVideo?.updated_at)}
        </span>

        <span className="youtube-video-title">
          {summaryVideo?.title || '-'}
        </span>

        <div style={{ display: 'flex', gap: 10 }}>
          {summaryVideo?.tag.map((hashtag) => (
            <span key={hashtag.name} className="hashtag">
              #{hashtag.name}
            </span>
          ))}
        </div>

        <div
          style={{
            margin: '20px 0',
            width: '100%',
            height: 432,
            borderRadius: 16,
            backgroundColor: '#f3f3f3',
          }}
        />

        <CategorySelectBox
          selectedCategoryId={summaryVideo?.category_id}
          onSelect={handleSelectCategory}
        />

        <span className="title">{summaryVideo?.description || '-'}</span>

        <div
          style={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {summaryVideo?.subHeading.map((subHeading, i) => (
            <div key={subHeading.id} className="subtitle">
              <span className="subtitle-index">{i + 1}</span>
              <span className="subtitle-text">{subHeading.name}</span>
            </div>
          ))}
        </div>

        <NoteBox onRefresh={onRefresh} />
      </DetailBox>
    </div>
  );
};

export default SummaryDetailBox;
