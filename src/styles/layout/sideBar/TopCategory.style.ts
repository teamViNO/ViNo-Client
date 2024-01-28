import theme from '@/styles/theme';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CommonButtonStyle = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-width: 0;
  text-decoration: none;
  justify-content: space-between;
`;

export const ShowOptionButton = styled.button`
  display: none;
  cursor: pointer;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  margin-right: 12px;
`;

export const Container = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 100px;
  margin-top: 12px;
  background-color: ${(props) =>
    props.selected ? theme.color.gray100 : theme.color.white};
  &:hover {
    ${ShowOptionButton} {
      display: block;
    }
  }
`;

export const FolderButton = styled(CommonButtonStyle)`
  width: 100%;
`;

export const ImageTextWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const CommonTitle = styled.span`
  color: ${theme.color.gray500};
  margin-left: 10px;
  ${theme.typography.Subheader3};
`;

export const SubFolderContainer = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
