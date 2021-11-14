/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { ReactElement } from 'react'

import { Icons } from '~/assets'
import { colors } from '~/theme'

import { HighlightView } from './PressableView'
import { BoxProps, Span, Box, Row } from './primitives'

interface Props extends BoxProps {
  title?: Nullable<string | number>
  onPress?: () => void
  onDelete?: () => void
  icon?: ReactElement
}

export const PressableMenu = ({
  title,
  onPress,
  onDelete,
  icon,
  color = colors.black,
  ...boxProps
}: Props) => {
  if (!title) return null

  return (
    <HighlightView onPress={onPress} {...boxProps}>
      <Row
        alignItems="center"
        bg={colors.white}
        borderBottomWidth={0.5}
        borderColor={colors.border}
        borderTopWidth={0.5}
        justifyContent="space-between"
        p={11}
        pl={20}
        width="100%"
      >
        {icon && <Box mr={8}>{icon}</Box>}
        {/*@ts-ignore */}
        <Span children={title} color={color} flex={1} numberOfLines={1} />
        {onPress && (
          <Box>
            <Icons.ArrowRight color={color as string} />
          </Box>
        )}
      </Row>
    </HighlightView>
  )
}
