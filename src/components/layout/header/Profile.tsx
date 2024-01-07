import * as HeaderStyle from '@/styles/layout/header/Header.style';
import SearchIcon from '@/assets/icons/search-light.svg?react';
import IconWithButton from './IconWithButton';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import BlurBackground from '../BlurBackground';
import ProfileContainer from './ProfileContainer';

interface IProfileProps {
  modalOpen: boolean;
  closeModal: () => void;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Profile = ({ modalOpen, closeModal, setModalOpen }: IProfileProps) => {
  const [header, setHeader] = useState<Element | null>(null);

  useEffect(() => {
    setHeader(document.querySelector('#header'));
  }, []);

  return (
    <>
      {modalOpen && createPortal(<BlurBackground />, header!)}
      <HeaderStyle.LinkWithMargin to="/search">
        <SearchIcon width={28} height={28} onClick={closeModal} />
      </HeaderStyle.LinkWithMargin>
      <IconWithButton name="NotifyOff" onClick={() => {}} />
      <div>
        <HeaderStyle.Button onClick={() => setModalOpen(!modalOpen)}>
          <img
            src="/src/assets/default-profile-circle.png"
            alt="원형 프로필 이미지"
          />
        </HeaderStyle.Button>
        {modalOpen && <ProfileContainer />}
      </div>
    </>
  );
};

export default Profile;
