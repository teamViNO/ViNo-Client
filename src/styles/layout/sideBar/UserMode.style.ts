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

export const CommonTitle = styled.span`
  color: ${theme.color.gray500};
  margin-left: 10px;
  ${theme.typography.Subheader3};
`;

export const ImageTextWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const ShowOptionButton = styled.button`
  display: none;
  cursor: pointer;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  margin-right: 12px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 48px;
`;

export const OptionsWrap = styled.div`
  background-color: ${theme.color.white};
  position: absolute;
  margin-left: 36px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
`;

export const OptionButton = styled.button`
  cursor: pointer;
  background-color: ${theme.color.white};
  padding: 12px 71.25px;
  border: 0;
  color: ${theme.color.gray400};
  ${theme.typography.Body3}
  &:hover {
    background-color: ${theme.color.gray100};
  }
`;

export const RecentVideoButton = styled(CommonButtonStyle)<{
  selected: boolean;
}>`
  background-color: ${(props) =>
    props.selected ? theme.color.gray100 : theme.color.white};
  width: 100%;
  border-radius: 100px;
`;

export const ButtonsWrap = styled.div<{ selected: boolean }>`
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

export const SubFolderContainer = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SubFolderWrap = styled.div`
  display: flex;
  width: 100%;
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
