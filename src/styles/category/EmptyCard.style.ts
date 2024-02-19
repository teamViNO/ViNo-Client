import styled from 'styled-components';
import theme from '../theme';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 49.94px 0px;
`;

export const ContentWrap = styled.div`
  margin: 20px 0 40px 0;
`;

export const Content = styled.p`
  color: ${theme.color.gray400};
  ${theme.typography.Subheader2}
`;

export const Button = styled(Link)`
  background-color: ${theme.color.gray500};
  color: ${theme.color.white};
  text-decoration: none;
  text-align: center;
  border-radius: 100px;
  padding: 12px 32px;
  ${theme.typography.Subheader2}

  &:hover {
    color: ${theme.color.green400};
  }
`;
