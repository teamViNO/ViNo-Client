import { useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import { createVideoAPI, getDummyVideoAPI, getVideoAPI } from '@/apis/videos';

import { SummaryDetailBox } from '@/components/SummaryPage';
import { SummaryScriptBox } from '@/components/SummaryPage';

import { modelingDataState } from '@/stores/model-controller';
import { summaryVideoState } from '@/stores/summary';
import { userTokenState } from '@/stores/user';

import { Container } from '@/styles/SummaryPage';

const SummaryPage = () => {
  const navigate = useNavigate();
  const { videoId } = useParams();
  const { search } = useLocation();

  const userToken = useRecoilValue(userTokenState);
  const modelingData = useRecoilValue(modelingDataState);
  const [summaryVideo, setSummaryVideo] = useRecoilState(summaryVideoState);

  const callVideoAPI = async () => {
    if (!videoId) return;

    try {
      const { isSuccess, result } = (await getVideoAPI(videoId)).data;

      if (!isSuccess) {
        navigate('/');
        return;
      }

      setSummaryVideo(result);
    } catch (e) {
      console.error(e);
      navigate('/');
    }
  };

  const callDummyAPI = async () => {
    if (!videoId) return;

    try {
      const { isSuccess, result } = (await getDummyVideoAPI(videoId)).data;

      if (!isSuccess) {
        navigate('/');
        return;
      }

      if (userToken) {
        const { video_id } = (
          await createVideoAPI({
            subheading: result.subHeading,
            ...result,
          })
        ).data.result;

        navigate(`/summary/${video_id}`);
      } else {
        setSummaryVideo(result);
      }
    } catch (e) {
      console.error(e);
      navigate('/');
    }
  };

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
    const searchParam = new URLSearchParams(search);
    const isInsight = searchParam.get('insight') === 'true';

    if (userToken) {
      if (isInsight) {
        callDummyAPI();
      } else {
        callVideoAPI();
      }
    } else {
      if (videoId === 'guest') {
        setGuestSummaryVideo();
      } else {
        callDummyAPI();
      }
    }

    return () => {
      setSummaryVideo(null);
      // setModelingData(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <Container style={{ height: 'calc(100vh - 74px)' }}>
      {summaryVideo && (
        <>
          <SummaryDetailBox onRefresh={callVideoAPI} />
          <SummaryScriptBox onRefresh={callVideoAPI} />
        </>
      )}
    </Container>
  );
};

export default SummaryPage;
