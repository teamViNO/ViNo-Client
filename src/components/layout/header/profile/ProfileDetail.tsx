import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import ProfileImage from '@/assets/default-profile-rect.png';
import InformationImage from '@/assets/information.png';
import KeyImage from '@/assets/key.png';

import { userTokenState } from '@/stores/user';

import * as ProfileDetailStyle from '@/styles/layout/header/profile/ProfileDetailstyle';

type Props = {
  onClose: () => void;
};

const ProfileDetail = ({ onClose }: Props) => {
  const navigate = useNavigate();
  const setUserToken = useSetRecoilState(userTokenState);

  const handleClickProfileButton = () => {
    navigate('/profile');
    onClose();
  };

  const handleClickLogoutButton = () => {
    setUserToken(null);
    onClose();
  };

  return (
    <ProfileDetailStyle.Layout>
      <ProfileDetailStyle.Container>
        <ProfileDetailStyle.InformationContainer>
          <img src={ProfileImage} alt="사각 프로필 이미지" />
          <ProfileDetailStyle.InformationWrap>
            <ProfileDetailStyle.InformationNickname>
              여울
            </ProfileDetailStyle.InformationNickname>
            <ProfileDetailStyle.InformationEmail>
              abcd1234@naver.com
            </ProfileDetailStyle.InformationEmail>
          </ProfileDetailStyle.InformationWrap>
        </ProfileDetailStyle.InformationContainer>

        <ProfileDetailStyle.ButtonWrap>
          <ProfileDetailStyle.Button onClick={handleClickProfileButton}>
            <img src={InformationImage} alt="icon" />

            <ProfileDetailStyle.ButtonName>
              내 정보
            </ProfileDetailStyle.ButtonName>
          </ProfileDetailStyle.Button>

          <ProfileDetailStyle.Button onClick={handleClickLogoutButton}>
            <img src={KeyImage} alt="icon" />

            <ProfileDetailStyle.ButtonName>
              로그아웃
            </ProfileDetailStyle.ButtonName>
          </ProfileDetailStyle.Button>
        </ProfileDetailStyle.ButtonWrap>
      </ProfileDetailStyle.Container>
    </ProfileDetailStyle.Layout>
  );
};

export default ProfileDetail;
