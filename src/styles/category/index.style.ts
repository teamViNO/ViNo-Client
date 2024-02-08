import styled from 'styled-components';
import theme from '../theme';

export const Container = styled.div`
  padding: 60px 60px 0px 120px;
  width: 100%;
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

export const ManagementBoxGray = styled.div`
  width: 36px;
  height: 34px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.color.gray100};
`;

export const ManagementBox = styled.div`
  width: 36px;
  height: 34px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.color.white};
`;

export const AllSelectBtn = styled.button`
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
