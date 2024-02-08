import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getVideoAPI } from '@/apis/videos';

import { SummaryDetailBox } from '@/components/SummaryPage';
import { SummaryScriptBox } from '@/components/SummaryPage';

import { Container } from '@/styles/SummaryPage';

const SummaryPage = () => {
  const navigate = useNavigate();
  const { videoId } = useParams();

  const callAPI = async () => {
    if (!videoId) return;

    try {
      const { isSuccess, result } = (await getVideoAPI(videoId)).data;

      if (!isSuccess) {
        navigate(-1);
      }

      console.log(isSuccess, result);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    callAPI();
  });

  return (
    <Container style={{ height: 'calc(100vh - 74px)' }}>
      <SummaryDetailBox />
      <SummaryScriptBox />
    </Container>
  );
};

export default SummaryPage;
