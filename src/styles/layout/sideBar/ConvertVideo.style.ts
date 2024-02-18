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

  & .progress-text {
    margin-top: 4px;
    align-self: flex-end;
    color: ${(props) => props.theme.color.gray400};
    ${(props) => props.theme.typography.Caption3};
  }
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

export const Button = styled.button`
  cursor: pointer;
  width: 228px;
  background-color: ${(props) => props.theme.color.gray500};
  border: none;
  border-radius: 8px;
  padding: 7px;
  color: ${(props) => props.theme.color.white};
  transition: 0.1s;
  cursor: pointer;
  ${theme.typography.Body1};

  &:disabled {
    background-color: ${(props) => props.theme.color.gray200};
    color: ${(props) => props.theme.color.gray300};
    cursor: not-allowed;
  }
`;

export const ProgressBar = styled.div`
  margin-top: 13px;
  width: 100%;
  height: 8px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.color.gray100};
  overflow: hidden;

  & > div {
    height: 100%;
    transition: 1s;
    transition-delay: 0.5s;
  }
`;
