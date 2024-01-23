import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import SearchIcon from '@/assets/icons/search-light.svg?react';

import * as HeaderStyle from '@/styles/layout/header';

import { isSideBarOpenState } from '@/stores/ui';
import { userState } from '@/stores/user';

import Alarm from './alarm';
import Profile from './profile';
import IconWithButton from './IconWithButton';
import LoginButton from './LoginButton';

const Header = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [alarmOpen, setAlarmOpen] = useState<boolean>(false);
  const [isSideBarOpen, setIsSideBarOpen] = useRecoilState(isSideBarOpenState);
  const isUser = useRecoilValue(userState);

  const toggleSideBarState = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <HeaderStyle.Container id="header">
      <HeaderStyle.Area>
        <IconWithButton
          name={isSideBarOpen ? 'Close' : 'Menu'}
          onClick={toggleSideBarState}
        />
        <Link to="/">
          <img src="/src/assets/logo-light.png" alt="하얀색 로고 이미지" />
        </Link>
      </HeaderStyle.Area>
      <HeaderStyle.Area>
        {!isUser && <LoginButton />}
        {isUser && (
          <>
            <HeaderStyle.LinkWithMargin to="/search">
              <SearchIcon width={28} height={28} />
            </HeaderStyle.LinkWithMargin>
            <Alarm alarmOpen={alarmOpen} setAlarmOpen={setAlarmOpen} />

            <Profile modalOpen={modalOpen} setModalOpen={setModalOpen} />
          </>
        )}
      </HeaderStyle.Area>
    </HeaderStyle.Container>
  );
};

export default Header;
