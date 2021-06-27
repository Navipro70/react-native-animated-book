import React from 'react'
import { TouchableWithoutFeedbackProps } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Animated, {
  withTiming,
  useAnimatedStyle,
  useSharedValue,
  interpolate,
  interpolateColor,
} from 'react-native-reanimated'

import { colors } from '~/theme'

const defaultInShadow = {
  color: colors.black as string,
  offset: {
    width: 0,
    height: 0,
  },
  opacity: 0.25,
  radius: 3,
  elevation: 5,
}

const defaultOutShadow: typeof defaultInShadow = {
  color: colors.iosBlue,
  offset: {
    width: 1,
    height: 1,
  },
  opacity: 0.4,
  radius: 4,
  elevation: 6,
}

interface ShadowConfig {
  shadowOut?: typeof defaultInShadow
  shadowIn?: typeof defaultOutShadow
}

interface Props
  extends Omit<
      TouchableWithoutFeedbackProps,
      'onPressIn' | 'onPressOut' | 'onPress' | 'onLogPress'
    >,
    ShadowConfig {
  scaleOut?: number
  onPress?: () => void
  onPressIn?: () => void
  onPressOut?: () => void
  onLongPress?: () => void
}

export const ShadowPressBase: React.FC<Props> = ({
  onPressIn,
  onPressOut,
  children,
  shadowIn = defaultInShadow,
  shadowOut = defaultOutShadow,
  ...props
}) => {
  const shadow = useSharedValue(0)
  const animStyle = useAnimatedStyle(() => ({
    shadowColor: interpolateColor(shadow.value, [0, 1], [shadowIn.color, shadowOut.color]),
    shadowOffset: {
      width: interpolate(shadow.value, [0, 1], [shadowIn.offset.width, shadowOut.offset.width]),
      height: interpolate(shadow.value, [0, 1], [shadowIn.offset.height, shadowOut.offset.height]),
    },
    shadowOpacity: interpolate(shadow.value, [0, 1], [shadowIn.opacity, shadowOut.opacity]),
    shadowRadius: interpolate(shadow.value, [0, 1], [shadowIn.radius, shadowOut.radius]),
    elevation: interpolate(shadow.value, [0, 1], [shadowIn.elevation, shadowOut.elevation]),
  }))

  const onPressInAnim = () => {
    shadow.value = withTiming(1, { duration: 150 })
    onPressIn?.()
  }

  const onPressOutAnim = () => {
    shadow.value = withTiming(0, { duration: 150 })
    onPressOut?.()
  }

  return (
    <TouchableWithoutFeedback onPressIn={onPressInAnim} onPressOut={onPressOutAnim} {...props}>
      <Animated.View style={animStyle}>{children}</Animated.View>
    </TouchableWithoutFeedback>
  )
}
