import styled from 'styled-components';
import theme from '@/styles/theme';
import { CommonButtonStyle, CommonWrapStyle } from '.';

export const Wrap = styled(CommonWrapStyle)`
  background-color: ${theme.color.gray500};
  margin-bottom: 12px;
`;

export const Button = styled(CommonButtonStyle)`
  color: ${theme.color.white};
`;
