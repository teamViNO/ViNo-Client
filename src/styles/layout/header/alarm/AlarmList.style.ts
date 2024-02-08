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
  padding: 36px 0;
  display: flex;
  flex-direction: column;
  z-index: 99;
  box-shadow: 4px 4px 30px 0 rgba(0, 0, 0, 0.16);
`;

export const NoticeWrap = styled.div`
  padding: 0 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .notice-count {
    display: flex;
    width: 26px;
    height: 26px;
    background-color: ${(props) => props.theme.color.gray100};
    color: ${(props) => props.theme.color.gray300};
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    ${theme.typography.Caption1};

    &.active {
      background-color: ${(props) => props.theme.color.green400};
      color: ${(props) => props.theme.color.gray500};
    }
  }
`;

export const NoticeAbsenceMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 140px;
  text-align: center;
  color: ${theme.color.gray300};
`;

export const NoticeToolWrap = styled.div`
  padding: 0 28px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;

  & > span {
    color: ${(props) => props.theme.color.gray400};
    cursor: pointer;
    ${(props) => props.theme.typography.Caption1};
  }
`;
