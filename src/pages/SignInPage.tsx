import { AxiosError } from 'axios';
import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { loginAPI } from '@/apis/user';

import CloseIcon from '@/assets/icons/close.svg?react';
import smallLogo from '@/assets/logo-dark.png';
import lineImg from '@/assets/line_img.png';
import errorImg from '@/assets/Error.png';
import signupImg from '@/assets/before-login.png';
import ImageSlider from '@/components/ImageSlider';
import NaverLogoImage from '@/assets/naver-logo.png';
import KakaoLogoImage from '@/assets/kakao-logo.png';

import { APIBaseResponse } from '@/models/config/axios';
import { LoginRequest } from '@/models/user';

import { userTokenState } from '@/stores/user';

import { BlurBackground } from '@/styles/modals/common.style';

const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isOpenErrorModal, setIsOpenErrorModal] = useState(false);
  const [isOpenSignUpModal, setIsOpenSignUpModal] = useState(false);
  const setUserToken = useSetRecoilState(userTokenState);

  const [loginInfo, setLoginInfo] = useState<LoginRequest>({
    email: '',
    password: '',
  });

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const emailRegex =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    const emailCurrent = e.target.value;

    setLoginInfo({
      ...loginInfo,
      email: emailCurrent,
    });

    setIsEmail(emailRegex.test(emailCurrent));
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const passwordCurrent = e.target.value;

    setLoginInfo({
      ...loginInfo,
      password: passwordCurrent,
    });

    setIsPassword(passwordCurrent.length >= 5);
  };

  const handleClickLoginButton = async () => {
    try {
      const res = await loginAPI(loginInfo);
      if (res.data.success) {
        setUserToken(res.data.result.token);
        navigate('/');
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        const { message } = error.response?.data as APIBaseResponse;

        if (message.indexOf('비밀번호') > -1) {
          setIsOpenErrorModal(true);
        } else if (message.indexOf('이메일') > -1) {
          setIsOpenSignUpModal(true);
        }
      }
    }
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleOnClick(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  const handleOnClick = () => {
    handleClickLoginButton();
  }

  const redirect_uri = `${location.origin}/social-account`; //Redirect URI
  const KAKAO_KEY = '77ddf1baeb87f4a9752ed437db43cd96'; //kakao REST API KEY
  // const NAVER_CLIENT_ID = 'qR4Npp1ui69SCF6nAJd2';
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_KEY}&redirect_uri=${redirect_uri}&response_type=code`;
  // const naverURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${redirect_uri}`;

  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <PageComponent>
      <LoginTotalComponent>
        <Image src={smallLogo} alt="logo" width={'auto'} height={20} />
        <TextDiv>로그인</TextDiv>
        <TextDiv
          style={{
            textTransform: 'none',
            fontSize: '16px',
            color: '#BBB',
            fontWeight: '500',
            lineHeight: '1.6',
          }}
        >
          계정에 로그인하고 나만의 영상 아카이빙을 시작해요
        </TextDiv>

        <NaverSection type="button">
          <img src={NaverLogoImage} alt="naver-logo" id="naver_id_login" />
          네이버는 지금 준비중!
        </NaverSection>

        <KakaoSection type="button" onClick={handleKakaoLogin}>
          <img src={KakaoLogoImage} alt="kakao-logo" />
          카카오로 시작하기
        </KakaoSection>

        <LineTotalComponent>
          <FlexBox style={{ flexDirection: 'row' }}>
            <Image src={lineImg} alt="line" width="266px" height="1.7px" />
            <TextDiv
              style={{
                textTransform: 'none',
                fontSize: '16px',
                color: '#BBB',
                fontWeight: '500',
              }}
            >
              OR
            </TextDiv>
            <Image src={lineImg} alt="line" width="266px" height="1.7px" />
          </FlexBox>
        </LineTotalComponent>

        <TextDiv
          style={{
            margin: '40px 0px 10px',
            textTransform: 'none',
            fontSize: 16,
            color: '#787878',
            fontWeight: 500,
            lineHeight: 1.6,
            alignSelf: 'flex-start',
          }}
        >
          이메일 주소
        </TextDiv>

        <LoginInput
          onChange={handleChangeEmail}
          type="text"
          placeholder="abcd@email.com"
          name="email"
          value={loginInfo.email}
        />

        <TextDiv
          style={{
            margin: '20px 0px 10px',
            textTransform: 'none',
            fontSize: 16,
            color: '#787878',
            fontWeight: 500,
            lineHeight: 1.5,
            alignSelf: 'flex-start',
          }}
        >
          비밀번호
        </TextDiv>

        <LoginInput
          onChange={handleChangePassword}
          type="password"
          placeholder="비밀번호를 입력해주세요."
          name="password"
          value={loginInfo.password}
          onKeyDown={handleOnKeyDown}
        />

        <Button
          disabled={!(isEmail && isPassword)}
          style={{ marginTop: 20 }}
          onClick={handleClickLoginButton}
        >
          로그인
        </Button>

        <TextTotalComponent style={{ marginTop: 40 }}>
          <TextDiv
            style={{
              fontSize: '14px',
              color: '#BBB',
              fontWeight: '500',
              lineHeight: '1.6',
            }}
          >
            계정이 기억나지 않으신가요?
          </TextDiv>

          <StyledLink to="/find-email">이메일 찾기</StyledLink>
          <StyledLink to="/find-password">비밀번호 찾기</StyledLink>
        </TextTotalComponent>

        <TextTotalComponent style={{ marginTop: 14 }}>
          <TextDiv
            style={{
              fontSize: '14px',
              color: '#BBB',
              fontWeight: '500',
              lineHeight: '1.6',
            }}
          >
            아직 계정이 없으신가요?
          </TextDiv>
          <StyledLink to="/sign-up">이메일로 회원가입</StyledLink>
        </TextTotalComponent>
      </LoginTotalComponent>

      <ImageSlider />

      {isOpenErrorModal && (
        <BlurBackground>
          <ModalDiv>
            <CloseIcon
              width={28}
              height={28}
              style={{ alignSelf: 'flex-end', cursor: 'pointer' }}
              onClick={() => setIsOpenErrorModal(false)}
            />

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <img src={errorImg} alt="error" width={56} height={56} />
              <h1 className="title">로그인 오류</h1>
              <span className="description">
                아이디 혹은 비밀번호를 다시 확인해주세요!
              </span>
            </div>

            <Button
              style={{ marginTop: 48 }}
              onClick={() => setIsOpenErrorModal(false)}
            >
              다시 입력하기
            </Button>
          </ModalDiv>
        </BlurBackground>
      )}

      {isOpenSignUpModal && (
        <BlurBackground>
          <ModalDiv style={{ height: '384px' }}>
            <CloseIcon
              width={28}
              height={28}
              style={{ alignSelf: 'flex-end', cursor: 'pointer' }}
              onClick={() => setIsOpenSignUpModal(false)}
            />

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <img src={signupImg} alt="signup" width={56} height={56} />
              <h1 className="title">아직 비회원이시네요!</h1>
              <span className="description">
                앗, 아직 회원이 아니시군요!
                <br /> 회원가입으로 우리 함께해요
              </span>
            </div>

            <Button
              style={{ marginTop: 48 }}
              onClick={() => navigate('/sign-up')}
            >
              회원가입 하기
            </Button>
          </ModalDiv>
        </BlurBackground>
      )}
    </PageComponent>
  );
};

export default SignInPage;

const PageComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1440px;
  width: 100%;
  min-height: 100vh;
  gap: 124px;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoginTotalComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 494px;
`;

const Image = styled.img`
  width: ${(props) => props.width || '68px'};
  height: ${(props) => props.height || '39.667px'};
`;

const TextTotalComponent = styled.div`
  display: flex;
  margin: 0px;
`;

const TextDiv = styled.div`
  color: ${(props) => props.color || '#1e1e1e'};
  text-transform: capitalize;
  font-size: 36px;
  font-weight: bold;
  font-style: normal;
  line-height: 160%; /* 57.6px */
  font-family: 'Pretendard';
  margin: 0px;
`;

const LineTotalComponent = styled.div`
  width: 594px;
  height: 24px;
`;

const LoginInput = styled.input`
  display: flex;
  width: 100%;
  height: 56px;
  align-items: center;
  gap: 20px;
  border-radius: 12px;
  border: 1.5px solid var(--gray-200, #e8e8e8);
  padding: 0px 0px 0px 20px;
  color: var(--Main, #1e1e1e);
  font-family: Spline Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */
  outline: none;
  transition: 0.1s;

  &:hover {
    border: 1.5px solid #1e1e1e;
  }

  &:focus {
    border: 1.5px solid #1e1e1e;
    border-color: #1e1e1e;
  }

  &::placeholder {
    color: var(--gray-300, #bbb);

    /* Body1 */
    font-family: 'Pretendard';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 25.6px */
  }
`;

const Button = styled.button((props) => ({
  width: '100%',
  height: 56,
  border: 'none',
  borderRadius: 12,
  backgroundColor: props.disabled
    ? props.theme.color.gray100
    : props.theme.color.gray500,
  textAlign: 'center',
  color: props.disabled ? props.theme.color.gray300 : props.theme.color.white,
  cursor: props.disabled ? 'not-allowed' : 'pointer',
  transition: '0.2s',
  ...props.theme.typography.Body1,
}));

const ModalDiv = styled.div`
  padding: 40px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  border-radius: 20px;
  background: ${(props) => props.theme.color.white};
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.1);

  & h1.title {
    color: ${(props) => props.theme.color.gray500};
    ${(props) => props.theme.typography.Header6};
  }

  & span.description {
    color: ${(props) => props.theme.color.gray300};
    ${(props) => props.theme.typography.Body1};
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.gray500};
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 160%;
  margin-left: 10px;
`;

const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 64px;
  border-radius: 100px;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Pretendard';
  border: none;
`;

const NaverSection = styled(SocialButton)`
  margin-top: 60px;
  background: #F3F3F3;
  color: #bbbbbb;
`;

const KakaoSection = styled(SocialButton)`
  margin: 12px 0px 40px;
  background: #fbe300;
  color: #000000;
`;
