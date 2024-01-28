import styled from 'styled-components';
import theme from '../theme';
import { Link } from 'react-router-dom';

export const Image = styled.img`
  width: 56px;
  height: 56px;
`;

export const Title = styled.span`
  ${theme.typography.Header6}
  color: ${theme.color.gray300};
  margin: 12px 0px 48px 0px;
`;

export const HighlightTitle = styled.span`
  color: ${theme.color.gray500};
`;

export const GoToCategoryButton = styled(Link)`
  width: 600px;
  background-color: ${theme.color.gray500};
  color: ${theme.color.white};
  border-radius: 12px;
  padding: 15px 0px;
  text-decoration: none;
  text-align: center;
  ${theme.typography.Body1}
`;
