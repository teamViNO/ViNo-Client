import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.footer`
  padding: 60px 145px;
  background-color: ${theme.color.gray100};
  ${theme.typography.Body1};
  position: relative;
  z-index: -1;
`;

export const SendEmailWrap = styled.div`
  display: flex;
  padding: 18px 20px;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0px;
  border-radius: 12px;
  background-color: ${theme.color.white};
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
