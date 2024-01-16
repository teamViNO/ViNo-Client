import styled from 'styled-components';
import theme from '@/styles/theme';
import { Link } from 'react-router-dom';

export const Wrap = styled.div`
  padding: 20px;
`;

export const Content = styled.span`
  color: ${theme.color.gray400};
  ${theme.typography.Body1};
`;

export const SigninLinkWrap = styled.div`
  margin-top: 20px;
`;

export const SigninLink = styled(Link)`
  color: ${theme.color.white};
  border-radius: 100px;
  padding: 7px 24px;
  background-color: ${theme.color.gray500};
  text-decoration: none;
  ${theme.typography.Body3};
`;
