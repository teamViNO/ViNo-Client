import VideoSvg from '@/assets/icons/video.svg?react';
import GuideSvg from '@/assets/icons/guide.svg?react';
import DownSvg from '@/assets/icons/down.svg?react';
import PlusSvg from '@/assets/icons/plus.svg?react';
import * as SideBarStyle from '@/styles/layout/sideBar/SideBar.style';
import { useSetRecoilState } from 'recoil';
import { sideBarState } from '@/stores/sideBar';

const SideBar = () => {
  const setSideBarState = useSetRecoilState(sideBarState);

  const closeSideBar = () => setSideBarState(false);
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
      <SideBarStyle.CategoryWrap>
        <SideBarStyle.CategoryText>카테고리</SideBarStyle.CategoryText>
        <SideBarStyle.CategoryAddButton>
          <PlusSvg width={20} height={20} />
        </SideBarStyle.CategoryAddButton>
      </SideBarStyle.CategoryWrap>
      <SideBarStyle.LoginNoticeWrap>
        <SideBarStyle.LoginNoticeContent>
          로그인하고
        </SideBarStyle.LoginNoticeContent>
        <br />
        <SideBarStyle.LoginNoticeContent>
          더 편리하게 사용해 보세요!
        </SideBarStyle.LoginNoticeContent>
        <br />
        <SideBarStyle.LoginNoticeLinkWrap>
          <SideBarStyle.LoginNoticeLink to="/sign-in" onClick={closeSideBar}>
            로그인/회원가입
          </SideBarStyle.LoginNoticeLink>
        </SideBarStyle.LoginNoticeLinkWrap>
      </SideBarStyle.LoginNoticeWrap>
    </SideBarStyle.Container>
  );
};

export default SideBar;
