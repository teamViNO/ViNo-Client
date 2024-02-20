import styled from 'styled-components';

export const PageComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1440px;
  width: 100%;
  min-height: 100vh;
  gap: 124px;
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoginTotalComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 494px;
`;

export const Image = styled.img`
  width: ${(props) => props.width || '68px'};
  height: ${(props) => props.height || '39.667px'};
  cursor: pointer;
`;

export const TextTotalComponent = styled.div`
  display: flex;
  margin: 0px;
`;

export const TextDiv = styled.div`
  color: ${(props) => props.color || '#1e1e1e'};
  text-transform: capitalize;
  font-size: 36px;
  font-weight: bold;
  font-style: normal;
  line-height: 160%; /* 57.6px */
  font-family: 'Pretendard';
  margin: 0px;
`;

export const LineTotalComponent = styled.div`
  width: 594px;
  height: 24px;
`;

export const LoginInput = styled.input`
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

export const Button = styled.button((props) => ({
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

export const ModalDiv = styled.div`
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

export const SocialButton = styled.button`
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

export const NaverSection = styled(SocialButton)`
  margin-top: 60px;
  background: #f3f3f3;
  color: #bbbbbb;
`;

export const KakaoSection = styled(SocialButton)`
  margin: 12px 0px 40px;
  background: #fbe300;
  color: #000000;
  cursor: pointer;
`;
