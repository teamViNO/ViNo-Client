import { useSetRecoilState } from 'recoil';

import * as GuestModeStyle from '@/styles/layout/sideBar/GuestMode.style';

import { isSideBarOpenState } from '@/stores/ui';

const GuestMode = () => {
  const setSideBarState = useSetRecoilState(isSideBarOpenState);

  const closeSideBar = () => setSideBarState(false);
  return (
    <GuestModeStyle.Wrap>
      <GuestModeStyle.Content>로그인하고</GuestModeStyle.Content>
      <br />
      <GuestModeStyle.Content>
        더 편리하게 사용해 보세요!
      </GuestModeStyle.Content>
      <br />
      <GuestModeStyle.SigninLinkWrap>
        <GuestModeStyle.SigninLink to="/sign-in" onClick={closeSideBar}>
          로그인/회원가입
        </GuestModeStyle.SigninLink>
      </GuestModeStyle.SigninLinkWrap>
    </GuestModeStyle.Wrap>
  );
};

export default GuestMode;
