import React from 'react'
import { StyleProp, TouchableOpacityProps, ViewStyle } from 'react-native'

import { duration } from '~/theme'

import { BoxProps, StyledTouchableOpacity } from './primitives'

interface PressableViewProps
  extends BoxProps,
    Omit<TouchableOpacityProps, 'onLongPress' | 'onPress'> {
  style?: StyleProp<ViewStyle>
  onPress?: () => void
  onLongPress?: () => void
  disabled?: boolean
  delay?: number
}

export const PressableView: React.FC<PressableViewProps> = ({
  onPress,
  onLongPress,
  disabled = !onPress && !onLongPress,
  delay = duration.fast,
  ...rest
}) => {
  return (
    <StyledTouchableOpacity
      activeOpacity={0.6}
      disabled={disabled}
      onLongPress={onLongPress}
      onPress={onPress}
      {...rest}
    />
  )
}
