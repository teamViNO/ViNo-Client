import theme from '@/styles/theme';
import styled from 'styled-components';
import { CommonWrapStyle } from '.';

export const Container = styled(CommonWrapStyle)`
  background-color: ${theme.color.white};
  border: 1.5px solid ${theme.color.gray200};
  justify-content: space-between;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const Wrap = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 240px;
  border: 0;
  background-color: ${theme.color.white};
`;

export const URLInput = styled.input`
  width: 228px;
  margin: 13px 20px 8px;
  padding: 9.5px 16px;
  background-color: ${theme.color.gray100};
  border: 0;
  border-radius: 8px;
  color: ${theme.color.gray500};
  outline: none;
  ${theme.typography.Caption2}
  &::placeholder {
    color: ${theme.color.gray300};
  }
`;

export const WarningMessage = styled.span`
  color: ${theme.color.red};
  align-self: flex-start;
  margin-bottom: 8px;
  ${theme.typography.Caption1}
`;

export const StartButton = styled.button`
  cursor: pointer;
  width: 228px;
  background-color: ${(props) =>
    props.disabled ? theme.color.gray200 : theme.color.gray500};
  border: 0;
  border-radius: 8px;
  padding: 7px;
  color: ${(props) =>
    props.disabled ? theme.color.gray300 : theme.color.white};
  ${theme.typography.Body1}
`;
