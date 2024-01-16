import * as HeaderStyle from '@/styles/layout/header/index';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import BlurBackground from '../../BlurBackground';
import ProfileDetail from './ProfileDetail';
import useOutsideClick from '@/hooks/useOutsideClick';

interface IProfileProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Profile = ({ modalOpen, setModalOpen }: IProfileProps) => {
  const [header, setHeader] = useState<Element | null>(null);
  const [profileRef] = useOutsideClick<HTMLDivElement>(() =>
    setModalOpen(false),
  );

  useEffect(() => {
    setHeader(document.querySelector('#header'));
  }, []);

  const toggleModalState = () => setModalOpen(!modalOpen);

  return (
    <>
      {modalOpen &&
        createPortal(<BlurBackground setModalOpen={setModalOpen} />, header!)}
      <div ref={profileRef}>
        <HeaderStyle.Button onClick={toggleModalState}>
          <img
            id="profile"
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
