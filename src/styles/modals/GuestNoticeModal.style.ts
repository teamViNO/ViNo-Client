import theme from '@/styles/theme';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.span`
  ${theme.typography.Header6}
  color: ${theme.color.gray500};
  margin: 12px 0;
`;

export const SubTitle = styled.span`
  ${theme.typography.Body1}
  color: ${theme.color.gray300};
  margin-bottom: 48px;
`;

export const Button = styled(Link)`
  text-decoration: none;
  width: 600px;
  padding: 15px 0px;
  border-radius: 12px;
  text-align: center;
  border: 0;
  color: ${theme.color.white};
  background-color: ${theme.color.gray500};
  ${theme.typography.Body1}
`;
