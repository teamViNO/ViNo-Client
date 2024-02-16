import { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { getVideoAPI } from '@/apis/videos';

import { SummaryDetailBox } from '@/components/SummaryPage';
import { SummaryScriptBox } from '@/components/SummaryPage';

import { summaryVideoState } from '@/stores/summary';

import { Container } from '@/styles/SummaryPage';

const SummaryPage = () => {
  const navigate = useNavigate();
  const { videoId } = useParams();
  const [summaryVideo, setSummaryVideo] = useRecoilState(summaryVideoState);

  const callAPI = useCallback(async () => {
    if (!videoId) return;

    try {
      const { isSuccess, result } = (await getVideoAPI(videoId)).data;

      if (!isSuccess) {
        navigate('/');
      }

      setSummaryVideo(result);
    } catch (e) {
      console.error(e);
      navigate('/');
    }
  }, [videoId, navigate, setSummaryVideo]);

  useEffect(() => {
    callAPI();

    return () => {
      setSummaryVideo(null);
    };
  }, [callAPI, setSummaryVideo]);

  return (
    <Container style={{ height: 'calc(100vh - 74px)' }}>
      {summaryVideo && (
        <>
          <SummaryDetailBox onRefresh={callAPI} />
          <SummaryScriptBox onRefresh={callAPI} />
        </>
      )}
    </Container>
  );
};

export default SummaryPage;
