import theme from '@/styles/theme';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px 0px 0px 60px;
  width: 288px;
`;

const CommonWrapStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border-radius: 12px;
  width: 268px;
`;

export const GuideWrap = styled(CommonWrapStyle)`
  background-color: ${theme.color.gray500};
  margin-bottom: 12px;
`;

export const ConvertVideoWrap = styled(CommonWrapStyle)`
  background-color: ${theme.color.white};
  border: 1.5px solid ${theme.color.gray200};
  justify-content: space-between;
  margin-bottom: 20px;
`;

const CommonButtonStyle = styled.button`
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  ${theme.typography.Subheader3};
`;

export const GuideButton = styled(CommonButtonStyle)`
  color: ${theme.color.white};
`;

export const ConvertVideoButton = styled(CommonButtonStyle)`
  color: ${theme.color.gray500};
`;

export const CategoryWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 20px;
`;

export const CategoryText = styled.span`
  color: ${theme.color.gray500};
  ${theme.typography.Subheader1};
`;

export const CategoryAddButton = styled.button`
  border: 0;
  background-color: ${theme.color.green400};
  border-radius: 100%;
  display: flex;
  padding: 8px;
`;

export const LoginNoticeWrap = styled.div`
  padding: 20px;
`;

export const LoginNoticeContent = styled.span`
  color: ${theme.color.gray400};
  ${theme.typography.Body1};
`;

export const LoginNoticeLinkWrap = styled.div`
  margin-top: 20px;
`;

export const LoginNoticeLink = styled(Link)`
  color: ${theme.color.white};
  border-radius: 100px;
  padding: 7px 24px;
  background-color: ${theme.color.gray500};
  text-decoration: none;
  ${theme.typography.Body3};
`;
