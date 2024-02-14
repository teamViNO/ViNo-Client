import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import ProfileImage from '@/assets/default-profile-rect.png';
import InformationImage from '@/assets/information.png';
import KeyImage from '@/assets/key.png';

import { MyInfoResponse } from '@/models/user';

import { userInfoState, userTokenState } from '@/stores/user';

import * as ProfileDetailStyle from '@/styles/layout/header/profile/ProfileDetailstyle';

type Props = {
  onClose: () => void;
};

const ProfileDetail = ({ onClose }: Props) => {
  const navigate = useNavigate();
  const setUserToken = useSetRecoilState(userTokenState);
  const userInfo = useRecoilValue(userInfoState) as MyInfoResponse;

  const handleClickProfileButton = () => {
    navigate('/profile');
    onClose();
  };

  const handleClickLogoutButton = () => {
    setUserToken(null);
    navigate('/');
    onClose();
  };

  return (
    <ProfileDetailStyle.Layout>
      <ProfileDetailStyle.Container>
        <ProfileDetailStyle.InformationContainer>
          <img src={ProfileImage} alt="사각 프로필 이미지" />
          <ProfileDetailStyle.InformationWrap>
            <ProfileDetailStyle.InformationNickname>
              {userInfo.name}
            </ProfileDetailStyle.InformationNickname>
            <ProfileDetailStyle.InformationEmail>
              {userInfo.email}
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
