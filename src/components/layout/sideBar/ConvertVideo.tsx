import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import VideoSvg from '@/assets/icons/video.svg?react';
import DownSvg from '@/assets/icons/down.svg?react';
import UpSvg from '@/assets/icons/up.svg?react';

import * as ConvertVideoStyle from '@/styles/layout/sideBar/ConvertVideo.style';
import { CommonTitle } from '@/styles/layout/sideBar/UserMode.style';

import {
  modelingErrorCodeState,
  modelingProgressState,
  videoLinkState,
} from '@/stores/model-controller';

import { validateYoutubeLink } from '@/utils/validation';
import theme from '@/styles/theme';

const ConvertVideo = () => {
  const [videoLink, setVideoLink] = useRecoilState(videoLinkState);
  const errorCode = useRecoilValue(modelingErrorCodeState);
  const progress = useRecoilValue(modelingProgressState);

  const [isOpen, setIsOpen] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [url, setURL] = useState('');

  const isValidate = validateYoutubeLink(url);

  const handleClickButton = () => {
    setVideoLink(url);
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
            disabled={!!videoLink}
            onChange={(e) => setURL(e.target.value)}
            onFocus={() => setIsFocus(true)}
          />

          {isFocus && !isValidate && (
            <ConvertVideoStyle.WarningMessage>
              *youtube.com이 들어간 링크만 가능해요
            </ConvertVideoStyle.WarningMessage>
          )}

          {progress < 100 ? (
            <ConvertVideoStyle.Button
              disabled={!isValidate || (progress > 0 && progress < 100)}
              onClick={handleClickButton}
            >
              start
            </ConvertVideoStyle.Button>
          ) : (
            <ConvertVideoStyle.Button
              style={{
                color: theme.color.gray500,
                backgroundColor: theme.color.green400,
              }}
              onClick={handleClickButton}
            >
              start
            </ConvertVideoStyle.Button>
          )}

          {videoLink && (
            <>
              <ConvertVideoStyle.ProgressBar>
                <div
                  style={{
                    width: `${progress}%`,
                    backgroundColor: errorCode
                      ? theme.color.red
                      : theme.color.green300,
                  }}
                />
              </ConvertVideoStyle.ProgressBar>

              <span className="progress-text">
                {errorCode ? '변환 중 오류' : `${progress}%`}
              </span>
            </>
          )}
        </>
      )}
    </ConvertVideoStyle.Container>
  );
};

export default ConvertVideo;
