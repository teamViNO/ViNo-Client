const typography = {
  Header1: {
    fontSize: 44,
    fontWeight: 'bold',
    lineHeight: 1.6,
  },
  Header2: {
    fontSize: 40,
    fontWeight: 'bold',
    lineHeight: 1.6,
  },
  Header3: {
    fontSize: 36,
    fontWeight: 'bold',
    lineHeight: 1.6,
  },
  Header4: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 1.6,
  },
  Header5: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 1.6,
  },
  Header6: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 1.6,
  },
  Subheader1: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 1.6,
  },
  Subheader2: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 1.6,
  },
  Subheader3: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 1.6,
  },
  Body1: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 1.6,
  },
  Body2: {
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 1.6,
  },
  Body3: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1.6,
  },
  Body4: {
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 1.6,
  },
  Caption1: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 1.6,
  },
  Caption2: {
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: 1.6,
  },
  Caption3: {
    fontSize: 10,
    fontWeight: 500,
    lineHeight: 1.6,
  },
  Caption4: {
    fontSize: 10,
    fontWeight: 'normal',
    lineHeight: 1.6,
  },
};

const color = {
  gray500: '#1E1E1E',
  gray400: '#787878',
  gray300: '#BBBBBB',
  gray200: '#E8E8E8',
  gray100: '#F3F3F3',
  green700: '#9BB700',
  green600: '#BCDB00',
  green500: '#DFFF00',
  green400: '#E9FF3F',
  green300: '#EFFF66',
  green200: '#F6FF99',
  green100: '#FBFFCC',
  white: '#FFFFFF',
  red: '#FF3A4A',
  blue: '#3681FE',
};

const theme = {
  typography,
  color,
};

export type TypographyType = typeof typography;
export type TypographyKeyType = keyof typeof typography;

export type ColorType = typeof color;
export type ColorKeyType = keyof typeof color;

export default theme;
