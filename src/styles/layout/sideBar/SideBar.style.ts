import theme from '@/styles/theme';
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
