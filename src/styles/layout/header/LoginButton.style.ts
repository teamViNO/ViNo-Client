import theme from '@/styles/theme';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(Link)`
  border: 0;
  background-color: ${theme.color.green400};
  padding: 7px 24px;
  border-radius: 100px;
  text-decoration: none;
  color: ${theme.color.gray500};
  margin: 2px 0px;
  ${theme.typography.Body3};
`;
