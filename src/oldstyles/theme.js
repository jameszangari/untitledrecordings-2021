export const colors = {
  black: '#000000',
  darkgray: '#474747',
  gray: '#8F8F8F',
  lightgray: '#B3B3B3',
  softgray: '#D6D6D6',
  white: '#F9F9F9',
  darkblue: '#004BAC',
  blue: '#2E89FF',
  softblue: '#88BBFF',
  darkred: '#AC0006',
  red: '#FF2E35',
  softred: '#FF888B',
  darkpurple: '#8400AC',
  purple: '#CE2EFF',
  softpurple: '#E388FF',
  darkgreen: '#28AC00',
  green: '#5FFF2E',
  softgreen: '#A3FF88'
}

export const breakpoints = {
  xxs: 0,
  xs: 480,
  xs2: 501,
  s: 640,
  m: 760,
  l: 1024,
  l1: 1200
}

export const mq = {}

Object.keys(breakpoints).map(
  key => (mq[key] = `@media (min-width: ${breakpoints[key]}px)`)
)

export const fonts = {
  family: {
    primary: 'Ambit',
    secondary: 'aviano-future'
  },
  weights: {
    thin: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
    extraBlack: 900
  }
}

export default {
  colors,
  breakpoints,
  mq,
  fonts
}
