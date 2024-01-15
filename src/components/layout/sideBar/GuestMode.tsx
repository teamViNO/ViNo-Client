import { sideBarState } from '@/stores/sideBar';
import * as SideBarStyle from '@/styles/layout/sideBar';
import { useSetRecoilState } from 'recoil';

const GuestMode = () => {
  const setSideBarState = useSetRecoilState(sideBarState);

  const closeSideBar = () => setSideBarState(false);
  return (
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
  );
};

export default GuestMode;
