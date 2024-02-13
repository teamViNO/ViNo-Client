import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { sendSMSAPI, checkSMSAPI } from '@/apis/sms';
import firstImg from '@/assets/first.png';
import smallLogo from "../assets/logo.png";
import mail from "../assets/mail.png";
import theme from '@/styles/theme';

const FindEmailPage = () => {
  const [name, setName] = useState<string>("");
  const [errMessage, setErrMessage] = useState('');
  const [tel, setTel] = useState<string>("");
  const [isTel, setIsTel] = useState<boolean>(false);
  const [isSend, setIsSend] = useState(false);
  
  const [certifyNum, setCertifyNum] = useState('');
  const [isCertify, setIsCertify] = useState(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [time, setTime] = useState(60*5);
  /*
  const [isAllCheck, setIsAllCheck] = useState(false);
  const [verifyCode, setVertifyCode] = useState('');
*/
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(prevTime => {
        if (prevTime <= 1) {
          clearInterval(intervalId);  
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000); 

    return () => clearInterval(intervalId); 
  }, []);

  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const onChangeTel = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const telRegex = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
      const telCurrent = e.target.value;
      setTel(telCurrent);
      if (!telRegex.test(telCurrent)) {
        setErrMessage('올바른 전화번호 형식이 아닙니다.');
        setIsTel(false);
      } else {
        setErrMessage('');
        setIsTel(true);
      }
    },
    [tel],
  );
  const onChangeCertifyInput = (e : React.ChangeEvent<HTMLInputElement>) => {
    const certifyRegex = /^\d{7}$/;
    setCertifyNum(e.target.value);
    if(certifyRegex.test(e.target.value)){
      setIsCertify(true);
    } else {
      setIsCertify(false);
    }
  }

  const onResultHandler = useCallback(() => {
    setShowResult(true);
  }, []);

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate('/sign-in');
  };
  const navigateToPw = () => {
    navigate('/findpw');
  };

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    },
    [tel],
  );
  const handleCertifyNum = async () => {
    const response = (await sendSMSAPI({
      phone_number : tel
    }))
    console.log(response)
    if(response.data.success){
      setIsSend(true);
      //setVertifyCode(response.data.message); // vertifycode 담는 부분 meesage로 임시 설정
    }
    startTimer();
  }
  const handleCheckCertify = async () => {
    console.log(certifyNum);
    const response = (await checkSMSAPI({
      verification_code : certifyNum
    }))
    console.log(response.headers['set-cookie']);
  }
  const startTimer = () => setTime(5 * 60); // 타이머 시작

  const minutes = Math.floor(time / 60); // 분
  const seconds = time % 60; 
return (
  <Container>
      {showResult ? (
          <ResultWrapper>
            <img src={mail} alt="메일 이미지" />
            <h4>
            서예진님의 이메일은 <span>yejin2174@naver.com</span>입니다!
            </h4>
            <p>로그인하고 나만의 영상 아카이빙을 시작해요</p>
            <LoginButton type="submit" onClick={navigateToLogin}>
            로그인 하러가기
            </LoginButton>
            <PwButton type="submit" onClick={navigateToPw}>
            비밀번호 찾기
            </PwButton>
          </ResultWrapper>
        ) : (
          <Wrapper>
            <LogoSection>
              <img src={firstImg} alt="로고 이미지" />
            </LogoSection>
            <MainSection>
              <Intro>
                <img src={smallLogo} alt="로고 이미지" />
                <h3>이메일 찾기</h3>
                <p>이메일이 기억나지 않으시나요?</p>
              </Intro>
              <InputSection>
                <Form onSubmit={onSubmit}>
                  <Label>
                    <span>이름</span>
                    <InputBox
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      placeholder="홍길동"
                      onChange={onChangeName}
                  ></InputBox>
                  </Label>
                  <TwoLabel>
                    <span>전화번호</span>
                    <UserDiv>
                    <InputBox
                      type="text"
                      id="tel"
                      name="tel"
                      value={tel}
                      placeholder="휴대폰 번호 입력 (-제외)"
                      onChange={onChangeTel}
                      style={{width : '326px'}}
                    />
                    <UserButton onClick = {handleCertifyNum} disabled = {!isTel}>{isSend? '인증번호 재전송' : '인증번호 받기'}</UserButton>
                 
                    </UserDiv>
                    {isSend ? <UserDiv>
                      <InputBox
                      type='text'
                      id='certify'
                      value={certifyNum}
                      placeholder='인증번호 입력'
                      onChange={(e) => onChangeCertifyInput(e)}
                      style={{width : '326px'}}/>
                      <UserButton onClick = {handleCheckCertify} disabled = {!isCertify}>인증번호 확인</UserButton>
                    </UserDiv>: ''}
                    
                    {!isTel && <Error>{errMessage}</Error>}
                    {isSend && <SendMsg>인증번호가 발송되었어요 (유효시간 {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')})</SendMsg>}
                  </TwoLabel>
                  </Form>
                  <FindButton type="submit" onClick={onResultHandler} disabled={true}>
                    찾아보기
                  </FindButton>
              <TextTotalComponent style={{margin: "40px 0px 0px 0px"}}>
              <TextDiv style={{fontSize:"14px", color:"#BBB", fontWeight: "500", lineHeight: "1.6"}}>
                계정이 기억나시나요?
              </TextDiv>
              <StyledLink to="/sign-in">로그인</StyledLink>
              </TextTotalComponent>
              <TextTotalComponent style={{margin: "12px 0px 0px 0px"}}>
              <TextDiv style={{fontSize:"14px", color:"#BBB", fontWeight: "500", lineHeight: "1.6"}}>
                    아직 계정이 없으신가요?
              </TextDiv>
              <StyledLink to="/sign-up">이메일로 회원가입</StyledLink>
              </TextTotalComponent>
              </InputSection>
            </MainSection>
          </Wrapper>
          )}
      </Container>
  );
};

export default FindEmailPage;

const Container = styled.div`
  display: flex;
`;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 1440px;
  width: 100%;
  min-height: 100vh;
  h4 {
    color:#1E1E1E;
    font-size: 32px;
    font-weight: 500;
    margin-top: 41px;
    margin-bottom: 8px;
    text-align: center;
    span {
      color: ${({ theme }) => theme.color.gray500};
      font-weight: bold;
    }
  }
  img{
    display: flex;
    width: 130.67px;
    height: 121.67px;
  }
  p{
    color:#BBBBBB;
    font-size: 16px;
    font-weight: 500;
    line-height: 160%;
    margin-top: 8px;
  }
`;
const UserDiv = styled.div`
  display : flex;
  flex-direction : row;
  gap : 8px;
`
const UserButton = styled.button`
  width : 160px;
  height : 56px;
  color : #1E1E1E;
  background-color : #E9FF3F;
  border : none;
  border-radius : 12px;
  ${theme.typography.Body1};
  &:disabled {
    background-color : #F3F3F3;
    color : #BBBBBB;
  }
`
const LoginButton = styled.button`
  width: 494px;
  height: 56px;
  background: #1E1E1E;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 500;
  line-height: 160%;
  border-radius: 12px;
  border: none;
  margin-top:64px;
  font-family: Pretendard;
  &:hover {
    cursor: pointer;
  }
`;

const PwButton = styled.button`
  width: 494px;
  height: 56px;
  background: #FFFFFF;
  color: #787878;
  font-size: 16px;
  font-weight: 500;
  line-height: 160%;
  border-radius: 12px;
  border: 1.5px solid var(--gray-200, #e8e8e8);
  margin-top:12px;
  font-family: Pretendard;
  &:hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1440px;
  width: 100%;
  min-height: 100vh;
  gap: 124px;
`;

const LogoSection = styled.div`
  img{
    display: flex;
    width: auto;
    height: 840px;
  }
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: 840px;
  margin-top: 300px;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  img {
    width: 64.55px;
    height: 20px;
    margin-bottom: 4px;
  }
  h3 {
    color: #1e1e1e;
    font-family: Pretendard;
    font-size: 36px;
    font-weight: bold;
    line-height: 160%;
    margin: 0;
  }
  p {
    color: #bbb;
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
    line-height: 160%;
  }
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap : 20px;
  width: 494px;
  height: auto;
`;

const Label = styled.label`
  span {
    font-size: 16px;
    color: #787878;
    font-family: Pretendard;
    margin-bottom: 8px;
    font-weight: 500;
    line-height: 160%;
  }
`;

const TwoLabel = styled.label`
  display : flex;
  flex-direction : column;
  margin-bottom: 8px;
  span {
    font-size: 16px;
    color: #787878;
    font-family: Pretendard;
    margin-bottom: 8px;
    font-weight: 500;
    line-height: 160%;
  }
`;

const InputBox = styled.input`
  display: flex;
  align-items: center;
  margin-bottom : 8px;
  justify-content: center;
  width: 494px;
  height: 56px;
  padding: 0px 0px 0px 20px;
  gap: 20px;
  flex: 1 0 0;
  font-size: 16px;
  font-style: normal;
  color: var(--Main, #1E1E1E);
  font-family: Pretendard;
  font-weight: 500;
  line-height: 160%;
  border-radius: 12px;
  border: 1.5px solid var(--gray-200, #e8e8e8);
  outline: none;
  
  &:hover {
    border: 1.5px solid #1e1e1e;
  }
  &:focus {
    border: 1.5px solid #1e1e1e;
    border-color: #1e1e1e;
  }
  &::placeholder {
    color: #bbb;

    ${theme.typography.Body1};
  }
`;

const Error = styled.p`
  color: #eb5353;
  font-size: 0.9rem !important;
  font-weight: 500;
  margin: 0;
  padding-left: 4px;
  padding-top: 12px;
`;
const SendMsg = styled.span`
  color : #FF4A4A !important;
  ${theme.typography.Body3};
`
const FindButton = styled.button`
  width: 494px;
  height: 56px;
  background: #1E1E1E;
  color: #EEEEEE;
  font-size: 16px;
  font-weight: 500;
  line-height: 160%;
  border-radius: 12px;
  border: none;
  font-family: Pretendard;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    background-color : #F3F3F3;
    color : #BBBBBB;
  }
`;

const TextTotalComponent = styled.div`
  display: flex;
  flex-direction: row;
  margin: "0px";
`;

const TextDiv = styled.div`
  color: ${(props) => props.color || "#1e1e1e"};
  text-transform: capitalize;
  font-size: 36px;
  font-weight: bold;
  font-style: normal;
  line-height: 160%; /* 57.6px */
  font-family: Pretendard;
  margin: "0px";
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.gray500};
  ${ theme.typography.Body3 };
  text-align: center;
  text-decoration: none;
  margin : 0px 0px 0px 10px;
`;

