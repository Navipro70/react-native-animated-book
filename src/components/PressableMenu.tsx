import React, { ReactElement } from 'react'

import { Icons } from '~/assets'
import { colors } from '~/theme'

import { PressableView } from './PressableView'
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
    <PressableView onPress={onPress}>
      <Row
        alignItems="center"
        bg={colors.gray}
        borderRadius={8}
        justifyContent="space-between"
        p={10}
        width="100%"
        {...boxProps}
      >
        {icon && <Box mr={8}>{icon}</Box>}
        <Span children={title} color={color} numberOfLines={1} />
        {onPress && (
          <Box>
            <Icons.ArrowRight color={color as string} />
          </Box>
        )}
      </Row>
    </PressableView>
  )
}
