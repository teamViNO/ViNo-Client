import theme from '@/styles/theme';
import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const Container = styled.div`
  width: 360px;
  background-color: white;
  position: absolute;
  margin-top: 25px;
  border-radius: 8px;
  padding: 36px 28px;
  display: flex;
  flex-direction: column;
  z-index: 99;
`;

export const NoticeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
`;

export const NoticeAbsenceMessage = styled.span`
  text-align: center;
  color: ${theme.color.gray300};
`;

export const NoticeCount = styled.div<{ length: number }>`
  display: flex;
  width: 26px;
  height: 26px;
  background-color: ${(props) =>
    props.length ? theme.color.green400 : theme.color.gray100};
  color: ${(props) =>
    props.length ? theme.color.gray500 : theme.color.gray300};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  ${theme.typography.Caption1};
`;
