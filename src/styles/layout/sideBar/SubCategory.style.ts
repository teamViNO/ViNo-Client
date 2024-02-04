import theme from '@/styles/theme';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const EditNameInputWrap = styled.div`
  display: flex;
  padding: 10px 0 10px 60px;
  border: 1px solid ${theme.color.gray200};
  width: 100%;
  border-radius: 100px;
`;

export const EditNameInput = styled.input`
  outline: none;
  border: 0;
  padding: 0;
  background-color: rgba(0, 0, 0, 0);
  margin: 0px 0px 4px -1px;
  ${theme.typography.Body3}
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

export const Drop = styled.div`
  height: 4px;
  border-radius: 1px;
`;
