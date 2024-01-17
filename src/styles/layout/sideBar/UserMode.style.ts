import theme from '@/styles/theme';
import styled from 'styled-components';

const CommonButtonStyle = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-width: 0;
`;

export const CommonTitle = styled.span`
  color: ${theme.color.gray500};
  margin-left: 10px;
  ${theme.typography.Subheader3};
`;

export const RecentVideoButton = styled(CommonButtonStyle)`
  background-color: ${theme.color.white};
`;

export const FolderButton = styled(CommonButtonStyle)`
  width: 100%;
  border-radius: 100px;
  margin-top: 12px;
  /* 현재 폴더에 위치 따라 배경 색상 gray100으로 변경하기 */
  background-color: ${theme.color.white};
`;
