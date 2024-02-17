import styled from 'styled-components';
import theme from '../theme';
import { Link } from 'react-router-dom';

const CommonIconBackground = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  padding: 60px 60px 40px 120px;
  width: 100%;
  margin-inline: auto;
  max-width: 1440px;
`;

export const MenuWrap = styled.div`
  display: flex;
  min-width: 'fit-content';
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const Menu = styled(Link)`
  text-decoration: none;
  ${theme.typography.Subheader2};
  color: ${theme.color.gray300};
  margin-right: 20px;

  &:hover {
    color: ${theme.color.gray500};
    ${theme.typography.Subheader1};
  }
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

export const SelectModeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const CardManagement = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export const SelectManagement = styled.select`
  width: 202px;
  height: 34px;
  padding: 0px 10px;
  border: 1px solid ${theme.color.gray200};
  border-radius: 8px;
  ${theme.typography.Body3};
  color: ${theme.color.gray400};
`;

export const ManagementBoxGray = styled(CommonIconBackground)`
  background: ${theme.color.gray100};
`;

export const ManagementBox = styled(CommonIconBackground)`
  background: ${theme.color.white};
`;

export const AllSelectBtn = styled.button`
  cursor: pointer;
  width: 90px;
  height: 28px;
  background: ${theme.color.gray500};
  border: none;
  border-radius: 100px;
  ${theme.typography.Caption1};
  color: ${theme.color.white};
`;

export const SelectedCount = styled.span`
  width: 98px;
  height: 34px;
  ${theme.typography.Body3};
  padding: 0px 10px;
  color: ${theme.color.gray400};
`;

export const DropdownWrap = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  z-index: 1;
  & div.select-box {
    padding: 8px 16px;
    width: 202px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    border-radius: 8px;
    border: solid 1px ${theme.color.gray200};
    color: ${theme.color.gray400};
    ${theme.typography.Body3};
    cursor: pointer;
  }
  & span.icon-button {
    padding: 5px 6px;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.color.gray200};

    &.changed {
      background-color: ${(props) => props.theme.color.green400};
      cursor: pointer;
    }
  }
`;
