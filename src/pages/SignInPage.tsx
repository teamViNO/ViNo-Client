import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import smallLogo from '@/assets/logo-dark.png';
import lineImg from '@/assets/line_img.png';
import firstImg from '@/assets/first.png';
import errorImg from '@/assets/Error.png';
import signupImg from '@/assets/before-login.png';
import closeImg from '@/assets/icons/close.svg';

interface LoginInfo {
  email: string;
  password: string;
}

const SignInPage: React.FC = () => {
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [openErrorModal] = useState(false);
  const [openSignUpModal] = useState(false);

  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    email: '',
    password: '',
  });

  const { email, password } = loginInfo;

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const emailRegex =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    const emailCurrent = e.target.value;

    setLoginInfo({
      ...loginInfo,
      email: emailCurrent,
    });

    if (!emailRegex.test(emailCurrent)) {
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const passwordCurrent = e.target.value;

    setLoginInfo({
      ...loginInfo,
      password: passwordCurrent,
    });

    if (passwordCurrent !== '') {
      setIsPassword(true);
    } else {
      setIsPassword(false);
    }
  };

  /*let login:any = new window.naver.LoginWithNaverId("http://localhost:5173/sign-in/", "http://localhost:5173/sign-in");
	let state = login.getUniqState();
	login.setButton("white", 2,40);
	login.setDomain(".service.com");
	login.setState(state);
	login.isPopup(false);
	login.LoginWithNaverId();*/

  return (
    <PageComponent>
      <LoginTotalComponent>
        <Image src={smallLogo} alt="logo" />
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

        <NaverSection>
          <img
            src="src/assets/naver-logo.png"
            alt="naver-logo"
            id="naver_id_login"
          />
          네이버로 시작하기
        </NaverSection>

        <KakaoSection>
          <img src="src/assets/kakao-logo.png" alt="kakao-logo" />
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
          value={email}
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
          value={password}
        />

        {isEmail && isPassword ? (
          <LoginButton
            /*onClick={login}*/
            style={{
              margin: '20px 0px 0px 0px',
              color: '#fff',
              backgroundColor: '#1E1E1E',
              lineHeight: '1.6',
            }}
          >
            로그인
          </LoginButton>
        ) : (
          <LoginButton
            /*onClick={login}*/
            style={{
              margin: '20px 0px 0px 0px',
              color: '#bbb',
              backgroundColor: '#F3F3F3',
              lineHeight: '1.6',
            }}
          >
            로그인
          </LoginButton>
        )}

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

      <Image src={firstImg} alt="firstImg" width="auto" height="840px" />

      {openErrorModal && (
        <ModalDiv>
          <CloseImage src={closeImg} alt="X" width="28px" height="28px" />
          <Image
            src={errorImg}
            alt="error"
            style={{
              margin: '68px 0px 0px 0px',
              width: '56px',
              height: '56px',
            }}
          />
          <TextDiv style={{ margin: '12px 0px 0px 0px', fontSize: '24px' }}>
            로그인 오류
          </TextDiv>
          <TextDiv
            style={{
              margin: '12px 0px 0px 0px',
              textTransform: 'none',
              fontSize: '16px',
              color: '#BBB',
            }}
          >
            아이디 혹은 비밀번호를 다시 확인해주세요!
          </TextDiv>
          <LoginButton
            style={{
              margin: '48px 0px 0px 0px',
              color: '#fff',
              backgroundColor: '#1E1E1E',
              width: '600px',
              height: '58px',
            }}
          >
            다시 입력하기
          </LoginButton>
        </ModalDiv>
      )}

      {openSignUpModal && (
        <ModalDiv style={{ height: '384px' }}>
          <CloseImage src={closeImg} alt="X" width="28px" height="28px" />
          <Image
            src={signupImg}
            alt="signup"
            style={{
              margin: '68px 0px 0px 0px',
              width: '56px',
              height: '56px',
            }}
          />
          <TextDiv style={{ margin: '12px 0px 0px 0px', fontSize: '24px' }}>
            아직 비회원이시네요!
          </TextDiv>
          <TextDiv
            style={{
              margin: '12px 0px 0px 0px',
              textTransform: 'none',
              fontSize: '16px',
              color: '#BBB',
            }}
          >
            앗, 아직 회원이 아니시군요!
          </TextDiv>
          <TextDiv
            style={{ textTransform: 'none', fontSize: '16px', color: '#BBB' }}
          >
            회원가입으로 우리 함께해요
          </TextDiv>
          <LoginButton
            style={{
              margin: '48px 0px 0px 0px',
              color: '#fff',
              backgroundColor: '#1E1E1E',
              width: '600px',
              height: '58px',
            }}
          >
            다시 입력하기
          </LoginButton>
        </ModalDiv>
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
  object-fit: contain;
  margin: 0px;
`;

const CloseImage = styled(Image)`
  position: absolute;
  top: 40px;
  right: 61px;
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

const LoginButton = styled.button`
  display: flex;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 12px;
  cursor: pointer;
  font-family: 'Pretendard';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */
  margin: 20px 0px 0px 0px;
  border: none;
  width: 100%;
  height: 56px;
  color: ${(props) => props.color || '#bbb'};
  background-color: #f3f3f3;
  margin: 0px;
`;

const ModalDiv = styled.div`
  position: fixed;
  top: 33%;
  left: 33%;
  z-index: 2;
  display: flex;
  width: 700px;
  height: 358px;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background: var(--White, #fff);

  /* dropdown */
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.1);
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
  cursor: pointer;
`;

const NaverSection = styled(SocialButton)`
  margin-top: 60px;
  background: #03c75a;
  color: #ffffff;
`;

const KakaoSection = styled(SocialButton)`
  margin: 12px 0px 40px;
  background: #fbe300;
  color: #000000;
`;
