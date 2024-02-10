import theme from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px 0px 0px 60px;
  width: 288px;
  box-shadow: 4px 0px 40px 0px rgba(0, 0, 0, 0.05);
  z-index: 0;
`;

export const StickySection = styled.div`
  position: sticky;
  top: 72px;
`;

export const CommonWrapStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border-radius: 12px;
  width: 268px;
`;

export const CommonButtonStyle = styled.button`
  cursor: pointer;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  ${theme.typography.Subheader3};
`;
