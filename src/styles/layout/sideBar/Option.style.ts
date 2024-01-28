import theme from '@/styles/theme';
import styled from 'styled-components';

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
