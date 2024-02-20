import React, { useState} from 'react';
import styled from 'styled-components';
import * as FindPasswordPageStyles from '@/styles/find/FindPasswordPageStyle';
import { Link } from 'react-router-dom';
import smallLogo from "../assets/logo.png";
import theme from '@/styles/theme';
import NotFindUserModal from '@/components/modals/NotFindUserModal';
import PhoneCheck from '@/components/PhoneCheck';
import { findPasswordAPI } from '@/apis/user';
import FindPassword from '@/components/FindPassword';
import ImageSlider from '@/components/ImageSlider';
import { useNavigate } from 'react-router-dom';

const FindPasswordPage = () => {
  const [name, setName] = useState<string>("");
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [isFind, setIsFind] = useState(false);
  const [allChecked, setAllChecked] = useState(false);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);
  };


  const findBtnHandler = async () => {
    try {
      const {data} = await findPasswordAPI({
        name: name,
        phone_number: tel,
        email: email
      });
      if(data.success){
        setIsFind(true);
      }
      else{
        setIsModal(true);
      }
    } catch (error) {
  }
}

const navigate = useNavigate();

const tohome = () => {
  navigate('/');
}

if(isFind){
  return (
    <FindPasswordPageStyles.Container>
      <FindPassword email={email}/>
    </FindPasswordPageStyles.Container>
  );
}
return (
  <FindPasswordPageStyles.Container>
          <FindPasswordPageStyles.Wrapper>
            <ImageSlider/>
            <FindPasswordPageStyles.MainSection>
              <FindPasswordPageStyles.Intro>
                <img src={smallLogo} alt="로고 이미지" onClick={tohome} />
                <h3>비밀번호 찾기</h3>
                <p>비밀번호가 기억나지 않으시나요?</p>
              </FindPasswordPageStyles.Intro>
              <FindPasswordPageStyles.InputSection>
                  <FindPasswordPageStyles.Label>
                    <span>이메일 주소</span>
                    <FindPasswordPageStyles.InputBox
                      type="text"
                      id="email"
                      name="email"
                      value={email}
                      placeholder="abcd@email.com"
                      onChange={onChangeEmail}
                    ></FindPasswordPageStyles.InputBox>
                  </FindPasswordPageStyles.Label>
                  <FindPasswordPageStyles.Label>
                    <span>이름</span>
                    <FindPasswordPageStyles.InputBox
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      placeholder="홍길동"
                      onChange={onChangeName}
                      readOnly={allChecked}
                  ></FindPasswordPageStyles.InputBox>
                  </FindPasswordPageStyles.Label>
                  <FindPasswordPageStyles.TwoLabel>
                    <PhoneCheck setCheck={setAllChecked} tel={tel} setTel={setTel} type={false}/>
                    </FindPasswordPageStyles.TwoLabel>
                  <FindPasswordPageStyles.FindButton disabled={!allChecked} onClick={findBtnHandler}>
                    찾아보기
                  </FindPasswordPageStyles.FindButton>
              <FindPasswordPageStyles.TextTotalComponent style={{margin: "40px 0px 0px 0px"}}>
              <FindPasswordPageStyles.TextDiv style={{fontSize:"14px", color:"#BBB", fontWeight: "500", lineHeight: "1.6"}}>
                계정이 기억나시나요?
              </FindPasswordPageStyles.TextDiv>
              <StyledLink to="/sign-in">로그인</StyledLink>
              </FindPasswordPageStyles.TextTotalComponent>
              <FindPasswordPageStyles.TextTotalComponent style={{margin: "12px 0px 0px 0px"}}>
              <FindPasswordPageStyles.TextDiv style={{fontSize:"14px", color:"#BBB", fontWeight: "500", lineHeight: "1.6"}}>
                    아직 계정이 없으신가요?
              </FindPasswordPageStyles.TextDiv>
              <StyledLink to="/sign-up">이메일로 회원가입</StyledLink>
              </FindPasswordPageStyles.TextTotalComponent>
              </FindPasswordPageStyles.InputSection>
            </FindPasswordPageStyles.MainSection>
          </FindPasswordPageStyles.Wrapper>
      {isModal && <NotFindUserModal setIsShow={setIsModal} type={true}/>}
      </FindPasswordPageStyles.Container>
  );
};

export default FindPasswordPage;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.gray500};
  ${ theme.typography.Body3 };
  text-align: center;
  text-decoration: none;
  margin : 0px 0px 0px 10px;
`;