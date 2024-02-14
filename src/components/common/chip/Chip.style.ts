import theme from '@/styles/theme';
import styled from 'styled-components';

export const ChipContainer = styled.div`
  cursor: pointer;
  margin-right: 18px;
  margin-bottom: 18px;
  padding: 3px 9.5px;
  background-color: ${theme.color.gray100};
  border-radius: 8px;
  color: ${theme.color.gray400};
  ${theme.typography.Caption1};

  &.light {
    border: 1px solid ${theme.color.gray200};
    background-color: ${theme.color.white};
  }

  &.selected {
    border-color: ${theme.color.gray300};
    background-color: ${theme.color.gray100};
  }
`;
