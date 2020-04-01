import { lighten } from 'polished'


const palette = {
  aqua: '#31ecd9',
  black: '#13161e',
  blue: '#26c7ec',
  brown: '#d69f83',
  deepblue: '#4c89ff',
  deepblack: '#090c11',
  gray: '#99989f',
  green: '#15cc5a',
  greenapple: '#aaea4e',
  orange: '#ff8924',
  deeporange: '#ff5c38',
  pink: '#ff629a',
  purple: '#7c62ff',
  red: '#ff3952',
  transparent: '#00000000',
  white: '#ffffff',
  yellow: '#ffb843',
}

export const colors = {
  ...palette,
  gray: lighten(0.5, palette.black),
  primary: palette.deepblue,
  background: palette.black,
  brand: palette.black,
  subBrand: palette.black,
  text: palette.black,
  link: palette.deepblue,

  logo: palette.black,

  // Status
  error: palette.red,
  warning: palette.orange,
  danger: palette.red,
  success: palette.green,
  visited: palette.purple,
  hover: palette.deepblue,
  active: palette.deepblue,
  drop: palette.deepblack,
  dragOver: palette.deepblue,
  dragLeave: palette.deepblack,
}
