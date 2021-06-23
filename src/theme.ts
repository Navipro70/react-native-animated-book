import { DefaultTheme } from 'styled-components'

import { platformSelect } from './utils'

export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  pink: 'rgba(241,70,53,0.1)',
  orange: '#FB9C45',
  green: '#80ED5E',
  link: '#2F80ED',
  iosBlue: '#147efb',
  lightGray: '#ECECEC',
  gray: '#DEDEDE',
  darkGray: '#D4D4D4',
  lightPink: '#ffe6ef',
  transparent: 'transparent',
} as const

export const fonts = {
  regular: platformSelect({
    ios: 'SourceSansPro-Regular',
    android: 'SourceSansPro-Regular',
  }),
  bold: platformSelect({
    ios: 'SourceSansPro-Bold',
    android: 'SourceSansPro-Bold',
  }),
} as const

export const duration = {
  fast: 200,
  normal: 300,
  slow: 400,
  lazy: 3000,
  default: 600,
} as const

const space = [0, 1, 2, 3, 4]

export const theme: DefaultTheme = {
  colors,
  fonts,
  duration,
  space,
}

export type ColorsType = ValueOf<typeof colors>
export type FontsType = ValueOf<typeof fonts>
