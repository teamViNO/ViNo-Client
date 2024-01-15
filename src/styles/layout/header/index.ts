import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.header`
  border: 1px solid black;
  padding: 16px 60px;
  display: flex;
  justify-content: space-between;
  background-color: ${theme.color.gray500};
  position: relative;
  z-index: 1;
`;

export const Area = styled.div`
  display: flex;
  align-items: center;
  div > Button {
    margin-right: 0px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  padding: 0;
  margin-right: 20px;
`;

export const LinkWithMargin = styled(Link)`
  margin-right: 20px;
`;
