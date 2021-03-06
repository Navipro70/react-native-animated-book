import 'styled-components'
import { colors, fonts, duration } from '~/theme'

declare module '*.png' {
  export default value as string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors
    fonts: typeof fonts
    duration: typeof duration
    space: number[]
  }
}

declare global {
  interface FormData {
    append(name: string, value: unknown, fileName?: string): void
    set(name: string, value: unknown, fileName?: string): void
  }
}

declare module '*.png'
