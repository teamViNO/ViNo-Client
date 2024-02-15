import theme from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 20px 0px 60px;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.05);
  z-index: 1;
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
