import theme from '@/styles/theme';
import styled from 'styled-components';
import { CommonButtonStyle, CommonWrapStyle } from '.';

export const Wrap = styled(CommonWrapStyle)`
  background-color: ${theme.color.white};
  border: 1.5px solid ${theme.color.gray200};
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Button = styled(CommonButtonStyle)`
  color: ${theme.color.gray500};
`;
