import * as HeaderStyle from '@/styles/layout/header/index';
import { Link } from 'react-router-dom';
import IconWithButton from './IconWithButton';
import { useState } from 'react';
import LoginButton from './LoginButton';
import Profile from './profile';
import SearchIcon from '@/assets/icons/search-light.svg?react';
import Alarm from './alarm';
import { useRecoilState, useRecoilValue } from 'recoil';
import { sideBarState } from '@/stores/sideBar';
import { userState } from '@/stores/user';

const Header = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [alarmOpen, setAlarmOpen] = useState<boolean>(false);
  const [isSideBarOpen, setIsSideBarOpen] = useRecoilState(sideBarState);
  const isUser = useRecoilValue(userState);

  const closeModal = () => {
    setModalOpen(false);
    setAlarmOpen(false);
  };

  const toggleSideBarState = () => {
    closeModal();
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <HeaderStyle.Container id="header">
      <HeaderStyle.Area>
        <IconWithButton
          name={isSideBarOpen ? 'Close' : 'Menu'}
          onClick={toggleSideBarState}
        />
        <Link to="/" onClick={closeModal}>
          <img src="/src/assets/logo-light.png" alt="하얀색 로고 이미지" />
        </Link>
      </HeaderStyle.Area>
      <HeaderStyle.Area>
        {!isUser && <LoginButton />}
        {isUser && (
          <>
            <HeaderStyle.LinkWithMargin to="/search">
              <SearchIcon width={28} height={28} onClick={closeModal} />
            </HeaderStyle.LinkWithMargin>
            <Alarm
              alarmOpen={alarmOpen}
              setAlarmOpen={setAlarmOpen}
              setModalOpen={setModalOpen}
            />

            <Profile
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              setAlarmOpen={setAlarmOpen}
            />
          </>
        )}
      </HeaderStyle.Area>
    </HeaderStyle.Container>
  );
};

export default Header;
