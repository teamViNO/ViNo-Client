import VideoSvg from '@/assets/icons/video.svg?react';
import GuideSvg from '@/assets/icons/guide.svg?react';
import DownSvg from '@/assets/icons/down.svg?react';
import * as SideBarStyle from '@/styles/layout/sideBar/SideBar.style';

const SideBar = () => {
  return (
    <SideBarStyle.Container>
      <SideBarStyle.GuideWrap>
        <GuideSvg width={28} height={28} />
        <SideBarStyle.GuideButton>Vino 가이드</SideBarStyle.GuideButton>
      </SideBarStyle.GuideWrap>
      <SideBarStyle.ConvertVideoWrap>
        <div style={{ display: 'flex' }}>
          <VideoSvg width={28} height={28} />
          <SideBarStyle.ConvertVideoButton>
            영상 변환하기
          </SideBarStyle.ConvertVideoButton>
        </div>
        <DownSvg width={18} height={18} />
      </SideBarStyle.ConvertVideoWrap>
    </SideBarStyle.Container>
  );
};

export default SideBar;
