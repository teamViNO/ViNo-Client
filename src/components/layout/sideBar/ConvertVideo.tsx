import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { createVideoAPI } from '@/apis/videos';

import VideoSvg from '@/assets/icons/video.svg?react';
import DownSvg from '@/assets/icons/down.svg?react';
import UpSvg from '@/assets/icons/up.svg?react';

import * as ConvertVideoStyle from '@/styles/layout/sideBar/ConvertVideo.style';
import { CommonTitle } from '@/styles/layout/sideBar/UserMode.style';

import { errorModalState, recommendationModalState } from '@/stores/modal';
import {
  modelingDataState,
  modelingProgressState,
  modelingStatusState,
  videoLinkState,
} from '@/stores/model-controller';
import { userTokenState } from '@/stores/user';

import theme from '@/styles/theme';

import { validateYoutubeLink } from '@/utils/validation';

const ConvertVideo = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const userToken = useRecoilValue(userTokenState);
  const setIsOpenModal = useSetRecoilState(recommendationModalState);
  const setVideoLink = useSetRecoilState(videoLinkState);
  const setIsOpenErrorModal = useSetRecoilState(errorModalState);
  const [status, setStatus] = useRecoilState(modelingStatusState);
  const [progress, setProgress] = useRecoilState(modelingProgressState);
  const [modelingData, setModelingData] = useRecoilState(modelingDataState);

  const [isOpen, setIsOpen] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [url, setURL] = useState('');

  const isValidate = validateYoutubeLink(url);

  const handleClickCreateVideoButton = async () => {
    if (!modelingData) return;

    if (userToken) {
      try {
        const { video_id } = (await createVideoAPI(modelingData)).data.result;

        navigate(`/summary/${video_id}`);
        setModelingData(null);
      } catch (e) {
        setIsOpenErrorModal(true)
        console.error(e);
      }
    } else {
      navigate('/summary/guest');
    }

    setVideoLink(null);
    setStatus('NONE');
    setProgress(0);
  };

  const handleClickStartConvertButton: React.MouseEventHandler<
    HTMLButtonElement
  > = (e) => {
    e.stopPropagation();

    setVideoLink(url);

    if (pathname === '/') {
      setIsOpenModal(true);
    }
  };

  return (
    <ConvertVideoStyle.Container>
      <ConvertVideoStyle.Wrap onClick={() => setIsOpen(!isOpen)}>
        <div style={{ display: 'flex', width: '100%' }}>
          <VideoSvg width={28} height={28} />
          <CommonTitle>영상 변환하기</CommonTitle>
        </div>

        {isOpen ? (
          <UpSvg width={18} height={18} />
        ) : (
          <DownSvg width={18} height={18} />
        )}
      </ConvertVideoStyle.Wrap>

      {isOpen && (
        <>
          <ConvertVideoStyle.URLInput
            placeholder="https://youtube.com/..."
            type="text"
            value={url}
            disabled={status === 'CONTINUE'}
            onChange={(e) => setURL(e.target.value)}
            onFocus={() => setIsFocus(true)}
          />

          {isFocus && !isValidate && (
            <ConvertVideoStyle.WarningMessage>
              *youtube.com이 들어간 링크만 가능해요
            </ConvertVideoStyle.WarningMessage>
          )}

          {status === 'COMPLETE' ? (
            <ConvertVideoStyle.Button
              style={{
                color: theme.color.gray500,
                backgroundColor: theme.color.green400,
              }}
              onClick={handleClickCreateVideoButton}
            >
              start
            </ConvertVideoStyle.Button>
          ) : (
            <ConvertVideoStyle.Button
              disabled={!isValidate || status === 'CONTINUE'}
              onClick={handleClickStartConvertButton}
            >
              start
            </ConvertVideoStyle.Button>
          )}
        </>
      )}

      {status !== 'NONE' && (
        <>
          <ConvertVideoStyle.ProgressBar>
            <div
              style={{
                width: `${progress}%`,
                backgroundColor:
                  status === 'ERROR' ? theme.color.red : theme.color.green300,
              }}
            />
          </ConvertVideoStyle.ProgressBar>

          <span className="progress-text">
            {status === 'ERROR' ? '변환 중 오류' : `${progress}%`}
          </span>
        </>
      )}
    </ConvertVideoStyle.Container>
  );
};

export default ConvertVideo;
