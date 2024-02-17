import styled from 'styled-components';
import theme from '@/styles/theme';
import { CommonButtonStyle } from '.';
import { Link } from 'react-router-dom';

export const Wrap = styled(Link)`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border-radius: 12px;
  width: 268px;
  background-color: ${theme.color.gray500};
  margin-bottom: 12px;
  text-decoration: none;
`;

export const Button = styled(CommonButtonStyle)`
  color: ${theme.color.white};
`;
