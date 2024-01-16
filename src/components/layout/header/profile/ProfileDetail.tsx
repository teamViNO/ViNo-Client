import * as ProfileDetailStyle from '@/styles/layout/header/profile/ProfileDetailstyle';

const ProfileDetail = () => {
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
          <ProfileDetailStyle.Button>
            <img src="/src/assets/information.png" alt="내 정보 이미지" />
            <ProfileDetailStyle.ButtonName>
              내 정보
            </ProfileDetailStyle.ButtonName>
          </ProfileDetailStyle.Button>
          <ProfileDetailStyle.Button>
            <img src="/src/assets/key.png" alt="내 정보 이미지" />
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
