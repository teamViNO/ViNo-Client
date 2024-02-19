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

const useCreateVideo = () => {
  const [modelingData, setModelingData] = useRecoilState(modelingDataState);
  const userToken = useRecoilValue(userTokenState);
  const setIsOpenErrorModal = useSetRecoilState(errorModalState);
  const setVideoLink = useSetRecoilState(videoLinkState);
  const setStatus = useSetRecoilState(modelingStatusState);
  const setProgress = useSetRecoilState(modelingProgressState);
  const navigate = useNavigate();

  const createVideo = async () => {
    if (!modelingData) return;

    if (userToken) {
      try {
        const { video_id } = (await createVideoAPI(modelingData)).data.result;

        navigate(`/summary/${video_id}`);
        setModelingData(null);
      } catch (e) {
        console.error(e);
        setIsOpenErrorModal(true);
      }
    } else {
      navigate('/summary/guest');
    }

    setVideoLink(null);
    setStatus('NONE');
    setProgress(0);
  };

  return { createVideo };
};

export default useCreateVideo;
