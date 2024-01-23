import styled from 'styled-components';
import theme from '../theme';

export const Container = styled.div`
  padding: 60px 60px 0px 120px;
`;

export const MenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const Menu = styled.button`
  ${theme.typography.Subheader2};
  color: ${theme.color.gray300};
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  margin-right: 20px;
`;

export const ModeWrap = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
`;

export const Mode = styled.span`
  margin-right: 4px;
  ${theme.typography.Body3};
  color: ${theme.color.gray400};
`;
