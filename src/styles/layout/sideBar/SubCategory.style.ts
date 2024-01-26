import theme from '@/styles/theme';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const ShowOptionButton = styled.button`
  display: none;
  cursor: pointer;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  margin-right: 12px;
`;

export const SubFolder = styled(Link)<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0px 10px 60px;
  margin-bottom: 4px;
  text-decoration: none;
  border-radius: 100px;
  color: ${theme.color.gray400};
  background-color: ${(props) =>
    props.selected ? theme.color.gray100 : theme.color.white};
  ${theme.typography.Body3};

  &:hover {
    ${ShowOptionButton} {
      display: block;
    }
  }
`;
