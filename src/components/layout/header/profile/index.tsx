import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useSetRecoilState } from 'recoil';

import { getMyInfoAPI } from '@/apis/user';

import ProfileImage from '@/assets/default-profile-circle.png';

import useOutsideClick from '@/hooks/useOutsideClick';

import { userInfoState } from '@/stores/user';

import * as HeaderStyle from '@/styles/layout/header';
import { BlurBackground } from '@/styles/modals/common.style';

import ProfileDetail from './ProfileDetail';

const Profile = () => {
  const setUserInfo = useSetRecoilState(userInfoState);
  const [isOpen, setIsOpen] = useState(false);
  const [profileRef] = useOutsideClick<HTMLDivElement>(() => setIsOpen(false));

  const callAPI = useCallback(async () => {
    try {
      const { result } = (await getMyInfoAPI()).data;

      setUserInfo(result);
    } catch (e) {
      console.error(e);
    }
  }, [setUserInfo]);

  useEffect(() => {
    callAPI();
  }, [callAPI]);

  return (
    <>
      <div ref={profileRef}>
        <HeaderStyle.Button onClick={() => setIsOpen(!isOpen)}>
          <img id="profile" src={ProfileImage} alt="원형 프로필 이미지" />
        </HeaderStyle.Button>

        {isOpen && (
          <>
            {createPortal(
              <BlurBackground />,
              document.getElementById('header')!,
            )}

            <ProfileDetail onClose={() => setIsOpen(false)} />
          </>
        )}
      </div>
    </>
  );
};

export default Profile;
