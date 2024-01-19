import theme from '@/styles/theme';
import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 20px;
  margin-bottom: 20px;
`;

export const Text = styled.span`
  color: ${theme.color.gray500};
  ${theme.typography.Subheader1};
`;

export const Button = styled.button`
  border: 0;
  background-color: ${theme.color.green400};
  border-radius: 100%;
  display: flex;
  padding: 8px;
`;
