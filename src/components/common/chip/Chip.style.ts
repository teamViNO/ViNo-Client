import theme, { ColorKeyType, TypographyKeyType } from '@/styles/theme';
import styled from 'styled-components';

interface IChipContainerProps {
  typography: TypographyKeyType;
  color: ColorKeyType;
}

export const ChipContainer = styled.div<IChipContainerProps>`
  margin-right: 18px;
  margin-bottom: 18px;
  padding: 3px 9.5px;
  background-color: ${theme.color.gray100};
  border-radius: 8px;
  color: ${(props) => theme.color[props.color]};
  ${(props) => theme.typography[props.typography]};
`;
