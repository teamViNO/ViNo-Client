import { useCallback, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import { getDummyVideoAPI, getVideoAPI } from '@/apis/videos';

import { SummaryDetailBox } from '@/components/SummaryPage';
import { SummaryScriptBox } from '@/components/SummaryPage';

import { IVideo } from '@/models/video';

import { modelingDataState } from '@/stores/model-controller';
import { summaryVideoState } from '@/stores/summary';
import { userTokenState } from '@/stores/user';

import { Container } from '@/styles/SummaryPage';

const SummaryPage = () => {
  const navigate = useNavigate();
  const { videoId } = useParams();
  const { search } = useLocation();

  const userToken = useRecoilValue(userTokenState);
  const [modelingData, setModelingData] = useRecoilState(modelingDataState);
  const [summaryVideo, setSummaryVideo] = useRecoilState(summaryVideoState);

  const callAPI = useCallback(async () => {
    if (!videoId) return;

    const searchParam = new URLSearchParams(search);
    const isInsight = searchParam.get('insight') === 'true';

    let isSuccess = false;
    let result: IVideo | null = null;

    try {
      if (isInsight) {
        const { data } = await getDummyVideoAPI(videoId);

        isSuccess = data.isSuccess;
        result = data.result;
      } else {
        const { data } = await getVideoAPI(videoId);

        isSuccess = data.isSuccess;
        result = data.result;
      }

      if (!isSuccess) {
        navigate('/');
        return;
      }

      setSummaryVideo(result);
    } catch (e) {
      console.error(e);
      navigate('/');
    }
  }, [search, videoId, navigate, setSummaryVideo]);

  const setGuestSummaryVideo = () => {
    if (!modelingData) {
      navigate('/');
      return;
    }

    const { subheading, tag, summary, ...others } = modelingData;

    setSummaryVideo({
      subHeading: subheading.map((item, id) => {
        return { id, ...item };
      }),
      tag: tag.map((item, id) => {
        return { id, ...item };
      }),
      summary: summary.map((item, id) => {
        return { id, ...item };
      }),
      video_id: 0,
      image: '',
      ...others,
    });
  };

  useEffect(() => {
    if (userToken) {
      callAPI();
    } else {
      if (videoId === 'guest') {
        setGuestSummaryVideo();
      } else {
        callAPI();
      }
    }

    return () => {
      setSummaryVideo(null);
      // setModelingData(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userToken]);

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
