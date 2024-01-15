import GuideSvg from '@/assets/icons/guide.svg?react';
import * as SideBarStyle from '@/styles/layout/sideBar';

const VinoGuide = () => {
  return (
    <SideBarStyle.GuideWrap>
      <GuideSvg width={28} height={28} />
      <SideBarStyle.GuideButton>Vino 가이드</SideBarStyle.GuideButton>
    </SideBarStyle.GuideWrap>
  );
};

export default VinoGuide;
