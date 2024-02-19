import React, { useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import smallLogo from "../assets/logo.png";
import theme from '@/styles/theme';
import NotFindUserModal from '@/components/modals/NotFindUserModal';
import PhoneCheck from '@/components/PhoneCheck';
import { findEmailAPI } from '@/apis/user';
import FindEmail from '@/components/FindEmail';
import ImageSlider from '@/components/ImageSlider';

const FindEmailPage = () => {
  const [name, setName] = useState<string>("");
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [isFind, setIsFind] = useState(false);
  const [allChecked, setAllChecked] = useState(false);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const findBtnHandler = async () => {
    try {
      const {data} = await findEmailAPI({
        name: name,
        phone_number: tel,
      });
      if(data.success){
        setIsFind(true);
        setEmail(data.email);
      }
    } catch (error) {
        setIsModal(true);
  }
}

if(isFind){
  return (
    <Container>
      <FindEmail userName={name} email={email}/>
    </Container>
  );
}
return (
  <Container>
          <Wrapper>
            <ImageSlider/>
            <MainSection>
              <Intro>
                <img src={smallLogo} alt="로고 이미지" />
                <h3>이메일 찾기</h3>
                <p>이메일이 기억나지 않으시나요?</p>
              </Intro>
              <InputSection>
                  <Label>
                    <span>이름</span>
                    <InputBox
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      placeholder="홍길동"
                      onChange={onChangeName}
                      readOnly={allChecked}
                  ></InputBox>
                  </Label>
                  <TwoLabel>
                    <PhoneCheck setCheck={setAllChecked} tel={tel} setTel={setTel} type = {false}/>
                    </TwoLabel>
                  <FindButton disabled={!allChecked} onClick={findBtnHandler}>
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
      {isModal && <NotFindUserModal setIsShow={setIsModal} type={true}/>}
      </Container>
  );
};

export default FindEmailPage;


const Container = styled.div`
  display: flex;
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
