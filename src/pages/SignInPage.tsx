import { AxiosError } from 'axios';
import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import * as SignInPageStyles from '@/styles/signin/SigninpageStyle';

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

  const tohome = () => {
    navigate('/');
  }

  return (
    <SignInPageStyles.PageComponent>
      <SignInPageStyles.LoginTotalComponent>
        <SignInPageStyles.Image src={smallLogo} alt="logo" width={'auto'} height={20} onClick={tohome} />
        <SignInPageStyles.TextDiv>로그인</SignInPageStyles.TextDiv>
        <SignInPageStyles.TextDiv
          style={{
            textTransform: 'none',
            fontSize: '16px',
            color: '#BBB',
            fontWeight: '500',
            lineHeight: '1.6',
          }}
        >
          계정에 로그인하고 나만의 영상 아카이빙을 시작해요
        </SignInPageStyles.TextDiv>

        <SignInPageStyles.NaverSection type="button">
          <img src={NaverLogoImage} alt="naver-logo" id="naver_id_login" />
          네이버는 지금 준비중!
        </SignInPageStyles.NaverSection>

        <SignInPageStyles.KakaoSection type="button" onClick={handleKakaoLogin}>
          <img src={KakaoLogoImage} alt="kakao-logo" />
          카카오로 시작하기
        </SignInPageStyles.KakaoSection>

        <SignInPageStyles.LineTotalComponent>
          <SignInPageStyles.FlexBox style={{ flexDirection: 'row' }}>
            <SignInPageStyles.Image src={lineImg} alt="line" width="266px" height="1.7px" />
            <SignInPageStyles.TextDiv
              style={{
                textTransform: 'none',
                fontSize: '16px',
                color: '#BBB',
                fontWeight: '500',
              }}
            >
              OR
            </SignInPageStyles.TextDiv>
            <SignInPageStyles.Image src={lineImg} alt="line" width="266px" height="1.7px" />
          </SignInPageStyles.FlexBox>
        </SignInPageStyles.LineTotalComponent>

        <SignInPageStyles.TextDiv
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
        </SignInPageStyles.TextDiv>

        <SignInPageStyles.LoginInput
          onChange={handleChangeEmail}
          type="text"
          placeholder="abcd@email.com"
          name="email"
          value={loginInfo.email}
        />

        <SignInPageStyles.TextDiv
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
        </SignInPageStyles.TextDiv>

        <SignInPageStyles.LoginInput
          onChange={handleChangePassword}
          type="password"
          placeholder="비밀번호를 입력해주세요."
          name="password"
          value={loginInfo.password}
          onKeyDown={handleOnKeyDown}
        />

        <SignInPageStyles.Button
          disabled={!(isEmail && isPassword)}
          style={{ marginTop: 20 }}
          onClick={handleClickLoginButton}
        >
          로그인
        </SignInPageStyles.Button>

        <SignInPageStyles.TextTotalComponent style={{ marginTop: 40 }}>
          <SignInPageStyles.TextDiv
            style={{
              fontSize: '14px',
              color: '#BBB',
              fontWeight: '500',
              lineHeight: '1.6',
            }}
          >
            계정이 기억나지 않으신가요?
          </SignInPageStyles.TextDiv>

          <StyledLink to="/find-email">이메일 찾기</StyledLink>
          <StyledLink to="/find-password">비밀번호 찾기</StyledLink>
        </SignInPageStyles.TextTotalComponent>

        <SignInPageStyles.TextTotalComponent style={{ marginTop: 14 }}>
          <SignInPageStyles.TextDiv
            style={{
              fontSize: '14px',
              color: '#BBB',
              fontWeight: '500',
              lineHeight: '1.6',
            }}
          >
            아직 계정이 없으신가요?
          </SignInPageStyles.TextDiv>
          <StyledLink to="/sign-up">이메일로 회원가입</StyledLink>
        </SignInPageStyles.TextTotalComponent>
      </SignInPageStyles.LoginTotalComponent>

      <ImageSlider />

      {isOpenErrorModal && (
        <BlurBackground>
          <SignInPageStyles.ModalDiv>
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

            <SignInPageStyles.Button
              style={{ marginTop: 48 }}
              onClick={() => setIsOpenErrorModal(false)}
            >
              다시 입력하기
            </SignInPageStyles.Button>
          </SignInPageStyles.ModalDiv>
        </BlurBackground>
      )}

      {isOpenSignUpModal && (
        <BlurBackground>
          <SignInPageStyles.ModalDiv style={{ height: '384px' }}>
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

            <SignInPageStyles.Button
              style={{ marginTop: 48 }}
              onClick={() => navigate('/sign-up')}
            >
              회원가입 하기
            </SignInPageStyles.Button>
          </SignInPageStyles.ModalDiv>
        </BlurBackground>
      )}
    </SignInPageStyles.PageComponent>
  );
};

export default SignInPage;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.gray500};
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 160%;
  margin-left: 10px;
`;
