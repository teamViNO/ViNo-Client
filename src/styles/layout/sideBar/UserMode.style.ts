import theme from '@/styles/theme';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CommonButtonStyle = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-width: 0;
  text-decoration: none;
`;

export const CommonTitle = styled.span`
  color: ${theme.color.gray500};
  margin-left: 10px;
  ${theme.typography.Subheader3};
`;

export const RecentVideoButton = styled(CommonButtonStyle)<{
  selected: boolean;
}>`
  background-color: ${(props) =>
    props.selected ? theme.color.gray100 : theme.color.white};
  width: 100%;
  border-radius: 100px;
`;

export const FolderButton = styled(CommonButtonStyle)<{ selected: boolean }>`
  width: 100%;
  border-radius: 100px;
  margin-top: 12px;
  /* 현재 폴더에 위치 따라 배경 색상 gray100으로 변경하기 */
  background-color: ${(props) =>
    props.selected ? theme.color.gray100 : theme.color.white};
`;
