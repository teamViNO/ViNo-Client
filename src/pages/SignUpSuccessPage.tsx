import styled from 'styled-components';
import celebrate from "../assets/celebrate.png";
import { useNavigate } from 'react-router-dom';

const SignUpSuccessPage = () => {

    const navigate = useNavigate();
    const navigateToHome = () => {
    navigate('/');
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