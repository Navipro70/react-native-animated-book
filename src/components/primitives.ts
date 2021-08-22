import { Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'
import {
  borders,
  color,
  flexbox,
  layout,
  space,
  typography,
  BorderProps,
  ColorProps,
  LayoutProps,
  SpaceProps,
  FlexboxProps,
  TypographyProps,
} from 'styled-system'

import { colors, fonts, FontsType } from '~/theme'

import { ScalePressBase, ShadowPressBase } from './buttons'

export type BoxProps = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  SpaceProps & {
    center?: boolean
    row?: boolean
    marginHorizontal?: number
    paddingHorizontal?: number
  }

export type TextType = keyof typeof textStyles | null

export type SpanProps = ColorProps &
  TypographyProps &
  SpaceProps & {
    font?: FontsType
    center?: boolean
    type?: TextType
  }

const boxStyles = css<BoxProps>`
  ${borders}
  ${color}
  ${flexbox}
  ${layout}
  ${space}
  ${(props) => props.center && `align-items: center; justify-content: center`}
`
export const Box = styled.View<BoxProps & { center?: boolean }>`
  ${boxStyles};
  ${({ center }) => center && `align-items: center; justify-content: center`};
  ${({ row }) =>
    row &&
    css`
      flex-direction: row;
    `};
`

export const Row = styled(Box)({
  flexDirection: 'row',
})

export const SafeAreaBox = styled(SafeAreaView)<BoxProps>`
  ${boxStyles}
`

export const Flex = styled(Box)<{ center?: boolean }>`
  flex: 1;
`

export const SafeAreaFlex = styled(SafeAreaBox)<{ center?: boolean }>`
  flex: 1;
`

export const KeyboardAvoidingBox = styled.KeyboardAvoidingView<BoxProps>`
  ${boxStyles}
`

export const StyledTouchableOpacity = styled.TouchableOpacity<BoxProps>`
  ${boxStyles}
`

export const ScrollBox = styled.ScrollView<BoxProps>`
  ${boxStyles}
`

export const StyledTouchableWithoutFeedback = styled.TouchableWithoutFeedback<BoxProps>`
  ${boxStyles}
`

export const StyledBaseInput = styled.TextInput<
  BoxProps & SpanProps & { focus?: boolean; error?: boolean }
>`
  ${boxStyles}
  ${typography}
  ${space}
  ${color}
  ${({ font = fonts.regular }) => `font-family: ${font}`}
  ${({ center }) => center && `text-align: center`}
`

export const Span = styled.Text<SpanProps>`
  color: ${colors.black};
  font-family: ${fonts.regular};
  ${({ type = 'main' }) => type && textStyles[type]}
  ${typography}
  ${space}
  ${color}
  ${({ center }) => center && `text-align: center`}
`

export const ScalePress = styled(ScalePressBase)<BoxProps>`
  ${boxStyles}
`

export const ShadowPress = styled(ShadowPressBase)<BoxProps>`
  ${boxStyles}
`

const textStyles = {
  main20: css`
    font-size: 20px;
    letter-spacing: 0.41px;
    font-family: ${fonts.regular};
  `,
  main18: css`
    font-size: 18px;
    letter-spacing: 0.41px;
    font-family: ${fonts.regular};
    line-height: 26px;
  `,
  main: css`
    font-size: 16px;
    letter-spacing: 0.41px;
    font-family: ${fonts.regular};
  `,
  main14: css`
    font-size: 14px;
    letter-spacing: 0.41px;
    font-family: ${fonts.regular};
  `,
  main12: css`
    font-size: 12px;
    letter-spacing: 0.41px;
    font-family: ${fonts.regular};
  `,
  bold24: css`
    font-size: 24px;
    font-family: ${fonts.bold};
    letter-spacing: 0.3px;
  `,
  bold22: css`
    font-size: 22px;
    font-family: ${fonts.bold};
    letter-spacing: 0.3px;
  `,
  bold20: css`
    font-size: 20px;
    font-family: ${fonts.bold};
    letter-spacing: 0.3px;
  `,
  bold18: css`
    font-size: 16px;
    font-family: ${fonts.bold};
  `,
  bold: css`
    font-size: 16px;
    font-family: ${fonts.bold};
    letter-spacing: 0.41px;
  `,
  bold14: css`
    font-size: 14px;
    font-family: ${fonts.bold};
  `,
  bold12: css`
    font-size: 12px;
    font-family: ${fonts.bold};
  `,
  bold10: css`
    font-size: 10px;
    font-family: ${fonts.bold};
  `,
} as const

export const ImageBox = styled(Image)`
  ${boxStyles}
`

export const StyledFlatList = styled.FlatList`
  ${boxStyles}
`

export interface DividerProps extends BoxProps {
  vertical?: boolean
}
