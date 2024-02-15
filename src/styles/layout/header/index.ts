import { ColorKeyType } from '@/styles/theme';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header<{ color: ColorKeyType; width: string }>`
  position: sticky;
  left: 0;
  top: 0;
  z-index: 2;
  padding: 16px 60px;
  display: flex;
  justify-content: space-between;
  width: ${(props) => `calc(${props.width})`};
  background-color: ${(props) => props.theme.color[props.color]};
  transition: background-color 0.2s;
`;

export const Area = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Button = styled.button<{ color?: ColorKeyType }>`
  padding: 0;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;

  & path {
    fill: ${(props) => props.color && props.theme.color[props.color]};
  }

  & #bottom {
    fill: ${(props) => props.theme.color.gray300};
  }

  & #notify {
    fill: ${(props) => props.theme.color.green600};
  }
`;

export const IconLink = styled(Link)<{ color: ColorKeyType }>`
  & path {
    fill: ${(props) => props.color && props.theme.color[props.color]};
  }
`;

export const LoginButton = styled(Link)<{
  background: ColorKeyType;
  text: ColorKeyType;
}>`
  border: none;
  background-color: ${(props) => props.theme.color[props.background]};
  padding: 7px 24px;
  border-radius: 100px;
  text-decoration: none;
  color: ${(props) => props.theme.color[props.text]};
  margin: 2px 0px;
  ${(props) => props.theme.typography.Body3};
`;
