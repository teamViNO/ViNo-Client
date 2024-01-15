import VideoSvg from '@/assets/icons/video.svg?react';
import DownSvg from '@/assets/icons/down.svg?react';
import * as SideBarStyle from '@/styles/layout/sideBar';

const ConvertVideo = () => {
  return (
    <SideBarStyle.ConvertVideoWrap>
      <div style={{ display: 'flex' }}>
        <VideoSvg width={28} height={28} />
        <SideBarStyle.ConvertVideoButton>
          영상 변환하기
        </SideBarStyle.ConvertVideoButton>
      </div>
      <DownSvg width={18} height={18} />
    </SideBarStyle.ConvertVideoWrap>
  );
};

export default ConvertVideo;
