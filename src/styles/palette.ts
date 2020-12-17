export type ColorType =
  | 'transparent'
  | 'white'
  | 'disabled'
  | 'primaryLight'
  | 'primaryMain'
  | 'purple'
  | 'blue'
  | 'lightBlue'
  | 'green'
  | 'orange'
  | 'red';

const palette = {
  /* Background colors */
  background1: '#FFFFFF',
  background2: '#F9F8F8',
  /* Typography colors */
  typo1: '#323232',
  typo2: '#989898',
  typo3: '#FFFFFF',
  typo4: '#514A3E',
  typo5: '#BCB19E',
  typo6: '#D9D5CD',
  /* Primary colors */
  primaryDark: '#3D392F',
  primaryMain: '#595244',
  primaryLight: '#BCB19E',
  /* Temperature colors */
  /* -20 */
  purpleDark: '#3331A8',
  purpleMain: '#6360FF',
  purpleLight: '#B6B5FF',
  /* -10 */
  blueDark: '#385297',
  blueMain: '#608DFF',
  blueLight: '#ABC3FF',
  /* 0 */
  lightBlueDark: '#2E679C',
  lightBlueMain: '#73ABDF',
  lightBlueLight: '#A5D4FF',
  /* 10 */
  greenDark: '#3F9600',
  greenMain: '#80DE76',
  greenLight: '#BCEEBB',
  /* 20 */
  orangeDark: '#A06900',
  orangeMain: '#FFB72D',
  orangeLight: '#FFDD9D',
  /* 30 */
  redDark: '#B02A02',
  redMain: '#FF744A',
  redLight: '#FFCBB5',
  /* Other colors */
  error: '#FB2D00',
  success: '#00CD15',
};

export const colorMap: {
  [color: string]: {
    background: string;
    color: string;
    hoverBackground: string;
  };
} = {
  transparent: {
    background: 'transparent',
    color: 'inherit',
    hoverBackground: 'rgba(0,0,0,0.1)',
  },
  white: {
    background: palette.background1,
    color: 'inherit',
    hoverBackground: 'rgba(0,0,0,0.2)',
  },
  disabled: {
    background: palette.primaryLight,
    color: palette.typo1,
    hoverBackground: palette.typo2,
  },
  primaryLight: {
    background: palette.primaryLight,
    color: palette.typo3,
    hoverBackground: palette.primaryMain,
  },
  primaryMain: {
    background: palette.primaryMain,
    color: palette.typo3,
    hoverBackground: palette.primaryDark,
  },
  purple: {
    background: palette.purpleLight,
    color: palette.purpleDark,
    hoverBackground: palette.purpleMain,
  },
  blue: {
    background: palette.blueLight,
    color: palette.blueDark,
    hoverBackground: palette.blueMain,
  },
  lightBlue: {
    background: palette.lightBlueLight,
    color: palette.lightBlueDark,
    hoverBackground: palette.lightBlueMain,
  },
  green: {
    background: palette.greenLight,
    color: palette.greenDark,
    hoverBackground: palette.greenMain,
  },
  orange: {
    background: palette.orangeLight,
    color: palette.orangeDark,
    hoverBackground: palette.orangeMain,
  },
  red: {
    background: palette.redLight,
    color: palette.redDark,
    hoverBackground: palette.redMain,
  },
};

export default palette;
