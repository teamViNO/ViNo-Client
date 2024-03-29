import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.footer`
  padding: 60px 145px;
  background-color: ${theme.color.gray100};
  ${theme.typography.Body1};
  position: relative;
  width: 100%;
  z-index: 0;
`;

export const SendEmailWrap = styled.div`
  display: flex;
  padding: 18px 20px;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0px;
  border-radius: 12px;
  background-color: ${theme.color.white};

  &.success-send {
    justify-content: flex-start;
    padding: 0;
    background-color: ${theme.color.gray100};
  }
`;

export const SuccessSendEmail = styled.span`
  margin-left: 20px;
  ${theme.typography.Subheader2}
  color: ${theme.color.blue};
`;

export const SendEmailImage = styled.img`
  width: 36px;
  height: 36px;
`;

export const SendEmailInput = styled.input`
  width: 100%;
  border: 0;
  outline: none;
  margin: 0px 20px;
  color: ${theme.color.gray500};
  ${theme.typography.Body1};

  &::placeholder {
    color: ${theme.color.gray300};
  }
`;

export const SendEmailButton = styled.button`
  width: 98px;
  height: 40px;
  border-radius: 8px;
  background-color: ${theme.color.gray500};
  color: ${theme.color.white};
  border: 0;
  cursor: pointer;
  transition: all 0.2s;

  &.disabled {
    cursor: default;
    background-color: ${theme.color.gray200};
    color: ${theme.color.gray300};
    border: 0;
  }
`;

export const AboutViNOWrap = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const AboutViNO = styled.p`
  color: ${theme.color.gray300};
  margin-right: 40px;
`;

export const CopyRight = styled.p`
  margin-top: 20px;
  color: ${theme.color.gray300};
  user-select: none;
`;
