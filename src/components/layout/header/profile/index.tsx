import * as HeaderStyle from '@/styles/layout/header/Header.style';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import BlurBackground from '../../BlurBackground';
import ProfileDetail from './ProfileDetail';

interface IProfileProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAlarmOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Profile = ({ modalOpen, setModalOpen, setAlarmOpen }: IProfileProps) => {
  const [header, setHeader] = useState<Element | null>(null);

  useEffect(() => {
    setHeader(document.querySelector('#header'));
  }, []);

  const toggleModalState = () => {
    setModalOpen(!modalOpen);
    setAlarmOpen(false);
  };

  return (
    <>
      {modalOpen && createPortal(<BlurBackground />, header!)}
      <div>
        <HeaderStyle.Button onClick={toggleModalState}>
          <img
            src="/src/assets/default-profile-circle.png"
            alt="원형 프로필 이미지"
          />
        </HeaderStyle.Button>
        {modalOpen && <ProfileDetail />}
      </div>
    </>
  );
};

export default Profile;
