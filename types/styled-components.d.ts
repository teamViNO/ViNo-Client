import { ColorType, TypographyType } from '@/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: TypographyType;
    color: ColorType;
  }
}
