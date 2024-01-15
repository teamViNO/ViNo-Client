import theme from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px 0px 0px 60px;
  width: 288px;
`;

export const CommonWrapStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border-radius: 12px;
  width: 268px;
`;

export const CommonButtonStyle = styled.button`
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  ${theme.typography.Subheader3};
`;
