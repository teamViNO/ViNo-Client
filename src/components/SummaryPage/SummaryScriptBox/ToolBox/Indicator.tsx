import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { IVideo } from '@/models/video';

import {
  summaryPlaySubHeadingIdState,
  summaryVideoState,
} from '@/stores/summary';

const Indicator = () => {
  const summaryVideo = useRecoilValue(summaryVideoState) as IVideo;
  const [playSubHeadingId, setPlaySubHeadingId] = useRecoilState(
    summaryPlaySubHeadingIdState,
  );

  const [focusId, setFocusId] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const { top: containerTop } = container.getBoundingClientRect();
      const list = Array.from(document.querySelectorAll('.script-box'))
        .map((el) => el.getBoundingClientRect().top - containerTop)
        .filter((top) => top < 100);
      // window.innerHeight * 0.3

      (document.querySelector('.tools') as HTMLDivElement).style.boxShadow =
        `0 4px 40px 0 rgba(0, 0, 0, ${container.scrollTop > 0 ? 0.05 : 0})`;

      if (list.length) {
        const { id } = summaryVideo.subHeading[list.length - 1];

        setFocusId(id);
      }
    };

    if (summaryVideo.subHeading.length) {
      setFocusId(summaryVideo.subHeading[0].id);
    }

    const container = document.querySelector('#script-box') as HTMLDivElement;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [summaryVideo]);

  useEffect(() => {
    if (playSubHeadingId < 0) return;

    const findIdx = summaryVideo.subHeading.findIndex(
      (s) => s.id === playSubHeadingId,
    );

    if (findIdx > -1) {
      const container = document.querySelector('#script-box') as HTMLDivElement;
      const element = document.querySelectorAll('.script-box')[findIdx];

      if (element) {
        const { top: containerTop } = container.getBoundingClientRect();
        const { top } = element.getBoundingClientRect();

        container.scrollTo({
          top: container.scrollTop + top - containerTop - 20,
          behavior: 'smooth',
        });
      }
    }

    setFocusId(playSubHeadingId);
  }, [playSubHeadingId, summaryVideo]);

  return (
    <div className="indicator">
      {summaryVideo.subHeading.map((item) => (
        <div
          key={item.id}
          className={`indicator-item ${item.id === focusId && 'active'}`}
          onClick={() => setPlaySubHeadingId(item.id)}
        />
      ))}
    </div>
  );
};

export default Indicator;
