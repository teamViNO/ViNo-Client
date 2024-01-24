import * as LoginButtonStyle from '@/styles/layout/header/LoginButton.style';

const LoginButton = () => {
  return (
    <LoginButtonStyle.Button to="/signin">
      로그인/회원가입
    </LoginButtonStyle.Button>
  );
};

export default LoginButton;
