import { useRecoilState, useRecoilValue } from 'recoil';

import {
  summaryIsEditingViewState,
  summaryUpdateVideoState,
  summaryVideoState,
} from '@/stores/summary';

const DescriptionBox = () => {
  const summaryVideo = useRecoilValue(summaryVideoState);
  const [summaryUpdateVideo, setSummaryUpdateVideo] = useRecoilState(
    summaryUpdateVideoState,
  );
  const isEditingView = useRecoilValue(summaryIsEditingViewState);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!summaryUpdateVideo) return;

    setSummaryUpdateVideo({
      ...summaryUpdateVideo,
      description: e.target.value,
    });
  };

  return isEditingView ? (
    <input
      className="title"
      value={summaryUpdateVideo?.description}
      onChange={handleChange}
    />
  ) : (
    <span className="title">{summaryVideo?.description || '-'}</span>
  );
};

export default DescriptionBox;
