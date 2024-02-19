import React, { useState} from 'react';
import styled from 'styled-components';
import * as FindEmailPageStyles from '@/styles/find/FindEmailPageStyle';
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
    <FindEmailPageStyles.Container>
      <FindEmail userName={name} email={email}/>
    </FindEmailPageStyles.Container>
  );
}
return (
  <FindEmailPageStyles.Container>
          <FindEmailPageStyles.Wrapper>
            <ImageSlider/>
            <FindEmailPageStyles.MainSection>
              <FindEmailPageStyles.Intro>
                <img src={smallLogo} alt="로고 이미지" />
                <h3>이메일 찾기</h3>
                <p>이메일이 기억나지 않으시나요?</p>
              </FindEmailPageStyles.Intro>
              <FindEmailPageStyles.InputSection>
                  <FindEmailPageStyles.Label>
                    <span>이름</span>
                    <FindEmailPageStyles.InputBox
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      placeholder="홍길동"
                      onChange={onChangeName}
                      readOnly={allChecked}
                  ></FindEmailPageStyles.InputBox>
                  </FindEmailPageStyles.Label>
                  <FindEmailPageStyles.TwoLabel>
                    <PhoneCheck setCheck={setAllChecked} tel={tel} setTel={setTel} type = {false}/>
                    </FindEmailPageStyles.TwoLabel>
                  <FindEmailPageStyles.FindButton disabled={!allChecked} onClick={findBtnHandler}>
                    찾아보기
                  </FindEmailPageStyles.FindButton>
              <FindEmailPageStyles.TextTotalComponent style={{margin: "40px 0px 0px 0px"}}>
              <FindEmailPageStyles.TextDiv style={{fontSize:"14px", color:"#BBB", fontWeight: "500", lineHeight: "1.6"}}>
                계정이 기억나시나요?
              </FindEmailPageStyles.TextDiv>
              <StyledLink to="/sign-in">로그인</StyledLink>
              </FindEmailPageStyles.TextTotalComponent>
              <FindEmailPageStyles.TextTotalComponent style={{margin: "12px 0px 0px 0px"}}>
              <FindEmailPageStyles.TextDiv style={{fontSize:"14px", color:"#BBB", fontWeight: "500", lineHeight: "1.6"}}>
                    아직 계정이 없으신가요?
              </FindEmailPageStyles.TextDiv>
              <StyledLink to="/sign-up">이메일로 회원가입</StyledLink>
              </FindEmailPageStyles.TextTotalComponent>
              </FindEmailPageStyles.InputSection>
            </FindEmailPageStyles.MainSection>
          </FindEmailPageStyles.Wrapper>
      {isModal && <NotFindUserModal setIsShow={setIsModal} type={true}/>}
      </FindEmailPageStyles.Container>
  );
};

export default FindEmailPage;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.gray500};
  ${ theme.typography.Body3 };
  text-align: center;
  text-decoration: none;
  margin : 0px 0px 0px 10px;
`;
