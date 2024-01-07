import * as ProfileContainerStyle from '@/styles/layout/header/ProfileContainer.style';

const ProfileContainer = () => {
  return (
    <ProfileContainerStyle.Layout>
      <ProfileContainerStyle.Container>
        <ProfileContainerStyle.InformationContainer>
          <img
            src="/src/assets/default-profile-rect.png"
            alt="사각 프로필 이미지"
          />
          <ProfileContainerStyle.InformationWrap>
            <ProfileContainerStyle.InformationNickname>
              여울
            </ProfileContainerStyle.InformationNickname>
            <ProfileContainerStyle.InformationEmail>
              abcd1234@naver.com
            </ProfileContainerStyle.InformationEmail>
          </ProfileContainerStyle.InformationWrap>
        </ProfileContainerStyle.InformationContainer>
        <ProfileContainerStyle.ButtonWrap>
          <ProfileContainerStyle.Button>
            <img src="/src/assets/information.png" alt="내 정보 이미지" />
            <ProfileContainerStyle.ButtonName>
              내 정보
            </ProfileContainerStyle.ButtonName>
          </ProfileContainerStyle.Button>
          <ProfileContainerStyle.Button>
            <img src="/src/assets/key.png" alt="내 정보 이미지" />
            <ProfileContainerStyle.ButtonName>
              로그아웃
            </ProfileContainerStyle.ButtonName>
          </ProfileContainerStyle.Button>
        </ProfileContainerStyle.ButtonWrap>
      </ProfileContainerStyle.Container>
    </ProfileContainerStyle.Layout>
  );
};

export default ProfileContainer;
