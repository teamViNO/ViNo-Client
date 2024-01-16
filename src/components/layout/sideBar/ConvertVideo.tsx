import VideoSvg from '@/assets/icons/video.svg?react';
import DownSvg from '@/assets/icons/down.svg?react';
import UpSvg from '@/assets/icons/up.svg?react';
import * as ConvertVideoStyle from '@/styles/layout/sideBar/ConvertVideo.style';
import { useState } from 'react';
import { CommonTitle } from '@/styles/layout/sideBar/UserMode.style';

const ConvertVideo = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [url, setURL] = useState<string>('');
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const youtubeURLValidation = url.includes('https://youtube.com/');

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleFocusState = () => setIsFocus(true);

  const inputURL = (e: React.ChangeEvent<HTMLInputElement>) =>
    setURL(e.target.value);

  return (
    <ConvertVideoStyle.Container>
      <ConvertVideoStyle.Wrap onClick={toggleOpen}>
        <div style={{ display: 'flex', width: '100%' }}>
          <VideoSvg width={28} height={28} />
          <CommonTitle>영상 변환하기</CommonTitle>
        </div>
        {isOpen && <UpSvg width={18} height={18} />}
        {!isOpen && <DownSvg width={18} height={18} />}
      </ConvertVideoStyle.Wrap>
      {isOpen && (
        <>
          <ConvertVideoStyle.URLInput
            placeholder="https://youtube/..."
            type="text"
            value={url}
            onChange={inputURL}
            onFocus={handleFocusState}
          />
          {isFocus && !youtubeURLValidation && (
            <ConvertVideoStyle.WarningMessage>
              *youtube.com이 들어간 링크만 가능해요
            </ConvertVideoStyle.WarningMessage>
          )}
          <ConvertVideoStyle.StartButton disabled={!youtubeURLValidation}>
            start
          </ConvertVideoStyle.StartButton>
        </>
      )}
    </ConvertVideoStyle.Container>
  );
};

export default ConvertVideo;
