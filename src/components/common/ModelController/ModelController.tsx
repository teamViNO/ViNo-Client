import { useEffect } from 'react';
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

const ModelController = () => {
  const [videoLink, setVideoLink] = useRecoilState(videoLinkState);
  const setModelingStatus = useSetRecoilState(modelingStatusState);
  const setModelingProgress = useSetRecoilState(modelingProgressState);
  const setModelingData = useSetRecoilState(modelingDataState);

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

        setModelingStatus('ERROR');
        setVideoLink(null);
      }
    };

    const callProcess2API = async (videoId: string) => {
      try {
        const { progress } = await (
          await modelingProcess2({ videoId })
        ).data.result;

        setModelingProgress(Number(progress));

        // setTimeout(() => {
        //   setModelingProgress(70);
        callProcess3API(videoId);
        // }, 1000 * 60);
      } catch (e) {
        console.error(e);

        setModelingStatus('ERROR');
        setVideoLink(null);
      }
    };

    const callProcess3API = async (videoId: string) => {
      try {
        const { finalData } = (await modelingProcess3({ videoId })).data.result;

        setModelingData(finalData);
        setModelingProgress(100);
        setModelingStatus('COMPLETE');
      } catch (e) {
        console.error(e);

        setModelingStatus('ERROR');
        setVideoLink(null);
      }
    };

    setModelingStatus('CONTINUE');
    setModelingProgress(10);
    callProcess1API();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoLink]);

  return <></>;
};

export default ModelController;
