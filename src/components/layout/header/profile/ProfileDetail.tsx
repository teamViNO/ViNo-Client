import { useNavigate } from 'react-router-dom';

import * as ProfileDetailStyle from '@/styles/layout/header/profile/ProfileDetailstyle';

type Props = {
  onClose: () => void;
};

const ProfileDetail = ({ onClose }: Props) => {
  const navigate = useNavigate();

  const handleClickProfileButton = () => {
    navigate('/profile');
    onClose();
  };

  const handleClickLogoutButton = () => {};

  return (
    <ProfileDetailStyle.Layout>
      <ProfileDetailStyle.Container>
        <ProfileDetailStyle.InformationContainer>
          <img
            src="/src/assets/default-profile-rect.png"
            alt="사각 프로필 이미지"
          />
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
            <img src="/src/assets/information.png" alt="icon" />

            <ProfileDetailStyle.ButtonName>
              내 정보
            </ProfileDetailStyle.ButtonName>
          </ProfileDetailStyle.Button>

          <ProfileDetailStyle.Button onClick={handleClickLogoutButton}>
            <img src="/src/assets/key.png" alt="icon" />

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
