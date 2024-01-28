import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const Container = styled.div`
  width: 260px;
  height: 200px;
  background-color: white;
  position: absolute;
  margin-top: 17px;
  border-radius: 12px;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 99;
`;

export const InformationContainer = styled.div`
  padding: 13.5px 20px;
  display: flex;
`;

export const InformationWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  margin-left: 15px;
`;

export const InformationNickname = styled.span`
  ${(props) => props.theme.typography.Body1};
`;

export const InformationEmail = styled.span`
  color: ${(props) => props.theme.color.gray300};
  ${(props) => props.theme.typography.Caption1};
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 26px;
  border: none;
  background-color: ${(props) => props.theme.color.white};
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    background-color: ${(props) => props.theme.color.gray100};
  }
`;

export const ButtonName = styled.span`
  color: ${(props) => props.theme.color.gray400};
  margin-left: 16px;
  ${(props) => props.theme.typography.Body3};
`;
