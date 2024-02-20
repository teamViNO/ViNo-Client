import { createVideoAlarmAPI } from '@/apis/user';
import { createVideoAPI } from '@/apis/videos';
import { errorModalState } from '@/stores/modal';
import {
  modelingDataState,
  modelingProgressState,
  modelingStatusState,
  videoLinkState,
} from '@/stores/model-controller';
import { userTokenState } from '@/stores/user';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import useGetAlarm from './useGetAlarm';

const useCreateVideo = () => {
  const [modelingData, setModelingData] = useRecoilState(modelingDataState);
  const userToken = useRecoilValue(userTokenState);
  const setIsOpenErrorModal = useSetRecoilState(errorModalState);
  const setVideoLink = useSetRecoilState(videoLinkState);
  const setStatus = useSetRecoilState(modelingStatusState);
  const setProgress = useSetRecoilState(modelingProgressState);
  const { getAlarm } = useGetAlarm();
  const navigate = useNavigate();

  const createVideo = async () => {
    if (!modelingData) return;

    if (userToken) {
      try {
        const { video_id } = (await createVideoAPI(modelingData)).data.result;

        await createVideoAlarmAPI(video_id, 'success', {
          title: `[${modelingData.title}]`,
          content:
            '영상이 모두 변환되었어요!\n이제 정리 된 영상을 확인하러 가볼까요?',
          is_confirm: false,
        });
        getAlarm();
        navigate(`/summary/${video_id}`);
        setModelingData(null);
      } catch (e) {
        console.error(e);
        setIsOpenErrorModal(true);
      }
    } else {
      navigate(`/summary/guest?id=${Date.now()}`);
    }

    setVideoLink(null);
    setStatus('NONE');
    setProgress(0);
  };

  return { createVideo };
};

export default useCreateVideo;
