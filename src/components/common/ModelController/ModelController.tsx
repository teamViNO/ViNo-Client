import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import {
  modelingProcess1,
  modelingProcess2,
  modelingProcess3,
} from '@/apis/video';

import {
  modelingDataState,
  modelingErrorCodeState,
  modelingProgressState,
  videoLinkState,
} from '@/stores/model-controller';

const ModelController = () => {
  const [videoLink, setVideoLink] = useRecoilState(videoLinkState);
  const setModelingData = useSetRecoilState(modelingDataState);
  const setErrorCode = useSetRecoilState(modelingErrorCodeState);
  const setModelingProgress = useSetRecoilState(modelingProgressState);

  useEffect(() => {
    if (!videoLink) return;

    const callProcess1API = async () => {
      try {
        const { videoId, progress } = (await modelingProcess1(videoLink)).data
          .result;

        setModelingProgress(Number(progress));
        callProcess2API(videoId);
      } catch (e) {
        console.error(e);

        setErrorCode('PROCEES1');
      }
    };

    const callProcess2API = async (videoId: string) => {
      try {
        const { progress } = await (
          await modelingProcess2({ videoId })
        ).data.result;

        setModelingProgress(Number(progress));
        callProcess3API(videoId);
      } catch (e) {
        console.error(e);

        setErrorCode('PROCEES2');
      }
    };

    const callProcess3API = async (videoId: string) => {
      try {
        const { finalData } = (await modelingProcess3({ videoId })).data.result;

        setModelingData(finalData);
        setModelingProgress(100);
      } catch (e) {
        console.error(e);

        setErrorCode('PROCEES3');
      }
    };

    setModelingProgress(10);
    callProcess1API();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoLink]);

  return <></>;
};

export default ModelController;
