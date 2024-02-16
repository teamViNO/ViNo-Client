import { useRecoilValue } from 'recoil';

import { updateVideoCategoryIdAPI } from '@/apis/videos';

import { summaryIsEditingViewState, summaryVideoState } from '@/stores/summary';

import { DetailBox } from '@/styles/SummaryPage';

import { formatDate } from '@/utils/date';

import { CategorySelectBox } from './CategorySelectBox';
import { NoteBox } from './NoteBox';
import { DescriptionBox } from './DescriptionBox';

type Props = {
  onRefresh: () => void;
};

const SummaryDetailBox = ({ onRefresh }: Props) => {
  const summaryVideo = useRecoilValue(summaryVideoState);
  const isEditingView = useRecoilValue(summaryIsEditingViewState);

  const handleSelectCategory = async (category_id: number) => {
    if (!summaryVideo) return;

    try {
      await updateVideoCategoryIdAPI(category_id, {
        video_id: [summaryVideo.video_id],
      });

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
          {formatDate(summaryVideo?.updated_at)}
        </span>

        <span className="youtube-video-title">
          {summaryVideo?.title || '-'}
        </span>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {summaryVideo?.tag.map((hashtag) => (
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
          selectedCategoryId={summaryVideo?.category_id}
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
