import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { getVideoAPI } from '@/apis/videos';

import { SummaryDetailBox } from '@/components/SummaryPage';
import { SummaryScriptBox } from '@/components/SummaryPage';

import { summaryVideoState } from '@/stores/summary';

import { Container } from '@/styles/SummaryPage';

const SummaryPage = () => {
  const navigate = useNavigate();
  const { videoId } = useParams();
  const setSummaryVideo = useSetRecoilState(summaryVideoState);

  const callAPI = async () => {
    if (!videoId) return;

    try {
      const { isSuccess, result } = (await getVideoAPI(videoId)).data;

      if (!isSuccess) {
        navigate(-1);
      }

      setSummaryVideo(result);
    } catch (e) {
      console.error(e);
      navigate('/');
    }
  };

  useEffect(() => {
    callAPI();
  });

  return (
    <Container style={{ height: 'calc(100vh - 74px)' }}>
      <SummaryDetailBox onRefresh={callAPI} />
      <SummaryScriptBox />
    </Container>
  );
};

export default SummaryPage;
