import VideoSvg from '@/assets/icons/video.svg?react';
import DownSvg from '@/assets/icons/down.svg?react';
import * as ConvertVideoStyle from '@/styles/layout/sideBar/ConvertVideo.style';

const ConvertVideo = () => {
  return (
    <ConvertVideoStyle.Wrap>
      <div style={{ display: 'flex' }}>
        <VideoSvg width={28} height={28} />
        <ConvertVideoStyle.Button>영상 변환하기</ConvertVideoStyle.Button>
      </div>
      <DownSvg width={18} height={18} />
    </ConvertVideoStyle.Wrap>
  );
};

export default ConvertVideo;
