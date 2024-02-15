import styled from 'styled-components';
import celebrate from "../assets/celebrate.png";
//import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import CloseIcon from '@/assets/icons/close.svg?react';
import nameImg from '@/assets/name.png';
import theme from '@/styles/theme';

import { BlurBackground } from '@/styles/modals/common.style';

const SignUpSuccessPage = () => {
    const [isOpenNickNameModal, setIsOpenNickNameModal] = useState(false);
    const [name, setName] = useState<string>("");

    //const navigate = useNavigate();
    const navigateToHome = () => {
    //navigate('/');
    setIsOpenNickNameModal(true);
    };

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        console.log(name);
      };

return(
    <Wrapper>
    <img src={celebrate} alt="축하 이미지" />
    <h4>
    회원가입이 완료되었어요!
    </h4>
    <p>로그인하고 나만의 영상 아카이빙을 시작해요</p>
    <HomeButton type="submit" onClick={navigateToHome}>
    영상 읽으러가기
    </HomeButton>
    {isOpenNickNameModal && (
        <BlurBackground>
          <ModalDiv style={{ height: '490px' }}>
            <CloseIcon
              width={28}
              height={28}
              style={{ alignSelf: 'flex-end', cursor: 'pointer' }}
              onClick={() => setIsOpenNickNameModal(false)}
            />

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <img src={nameImg} alt="signup" width={56} height={56} />
              <h1 className="title">어떤 이름으로 불러드릴까요?</h1>
              <span className="description">
                vino에 오신걸 환영합니다! 원하시는 이름으로 불러드릴게요
              </span>
            </div>

            <InputBox
                type="text"
                id="name"
                name="name"
                value={name}
                placeholder="원하시는 닉네임을 작성해주세요"
                onChange={onChangeName}
                maxLength={6}
              >
              </InputBox>
            <Button
              style={{ marginTop: 12 }}
              // onClick={() => navigate('/sign-up')}
            >
              등록하기
            </Button>
          </ModalDiv>
        </BlurBackground>
      )}
    </Wrapper>
    );
  };
   
  
  export default SignUpSuccessPage;

  const Wrapper = styled.div`
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
    line-height: 160%;
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

const HomeButton = styled.button`
  width: 494px;
  height: 56px;
  background: #1e1e1e;
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

const InputBox = styled.input`
    width: 100%;
    height: 56px;
    background-color: #F3F3F3;
    padding: 0px 0px 0px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex: 1 0 0;
    font-style: normal;
    border: none;
    color: var(--Main, #1E1E1E);
    font-family: Pretendard;
    ${theme.typography.Body1};
    border-radius: 12px;
    margin-top: 48px;

    &::placeholder {
    color: #bbb;

    ${theme.typography.Body1};
  }
`

const Button = styled.button`
    width: 100%;
    height: 56px;
    border: none;
    border-radius: 12px;
    background-color : #1E1E1E;
    color: #fff;
    text-align: center;
    ${theme.typography.Body1};
`;