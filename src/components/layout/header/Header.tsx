import * as HeaderStyle from '@/styles/layout/header/Header.style';
import { Link } from 'react-router-dom';
import IconWithButton from './IconWithButton';
import { useState } from 'react';
import LoginButton from './LoginButton';
import Profile from './Profile';

const Header = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const isUser: boolean = true;

  const closeModal = () => setModalOpen(false);

  return (
    <HeaderStyle.Container id="header">
      <HeaderStyle.Area>
        <IconWithButton name="Menu" onClick={closeModal} />
        <Link to="/" onClick={closeModal}>
          <img src="/src/assets/logo-light.png" alt="하얀색 로고 이미지" />
        </Link>
      </HeaderStyle.Area>
      <HeaderStyle.Area>
        {!isUser && <LoginButton />}
        {isUser && (
          <Profile
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            closeModal={closeModal}
          />
        )}
      </HeaderStyle.Area>
    </HeaderStyle.Container>
  );
};

export default Header;
