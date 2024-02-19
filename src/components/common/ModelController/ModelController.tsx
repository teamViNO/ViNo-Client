import { useEffect, useRef } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import {
  modelingProcess1,
  modelingProcess2,
  modelingProcess3,
} from '@/apis/video';

import {
  modelingDataState,
  modelingProgressState,
  modelingStatusState,
  videoLinkState,
} from '@/stores/model-controller';
import { createVideoAlarmAPI } from '@/apis/user';

const ModelController = () => {
  const interval = useRef<NodeJS.Timeout>();
  const [videoLink, setVideoLink] = useRecoilState(videoLinkState);
  const setModelingStatus = useSetRecoilState(modelingStatusState);
  const setModelingProgress = useSetRecoilState(modelingProgressState);
  const setModelingData = useSetRecoilState(modelingDataState);

  const startInterval = () => {
    interval.current = setInterval(() => {
      setModelingProgress((progress) =>
        Math.min(95, progress + Math.ceil(Math.random() * 3)),
      );
    }, 1000 * 5);
  };

  const handleError = async () => {
    try {
      await createVideoAlarmAPI(0, 'fail', {
        title: '앗, 영상 변환 중 오류가 생겼어요',
        content: '어떤 문제인지 확인해보세요!',
        is_confirm: false,
      });
    } catch (e) {
      console.error(e);
    }

    if (interval.current) {
      clearInterval(interval.current);
    }

    setModelingStatus('ERROR');
    setVideoLink(null);
  };

  useEffect(() => {
    if (!videoLink) return;

    const callProcess1API = async () => {
      try {
        const { videoId } = (await modelingProcess1(videoLink)).data.result;

        callProcess2API(videoId);
      } catch (e) {
        console.error(e);

        handleError();
      }
    };

    const callProcess2API = async (videoId: string) => {
      try {
        await modelingProcess2({ videoId });

        setTimeout(() => {
          setModelingProgress((progress) => Math.max(progress, 40));
          callProcess3API(videoId);
        }, 1000 * 30);
      } catch (e) {
        console.error(e);

        handleError();
      }
    };

    const callProcess3API = async (videoId: string) => {
      try {
        const { finalData } = (await modelingProcess3({ videoId })).data.result;

        if (interval.current) {
          clearInterval(interval.current);
        }

        setModelingData(finalData);
        setModelingProgress(100);
        setModelingStatus('COMPLETE');
      } catch (e) {
        console.error(e);

        handleError();
      }
    };

    setModelingStatus('CONTINUE');
    setModelingProgress(Math.ceil(Math.random() * 5));
    callProcess1API();
    startInterval();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoLink]);

  return <></>;
};

export default ModelController;
