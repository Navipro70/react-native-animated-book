import React from 'react'
import { TouchableWithoutFeedbackProps } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

interface Props
  extends Omit<
    TouchableWithoutFeedbackProps,
    'onPressIn' | 'onPressOut' | 'onPress' | 'onLogPress'
  > {
  scaleOut?: number
  onPress?: () => void
  onPressIn?: () => void
  onPressOut?: () => void
  onLongPress?: () => void
}

export const ScalePressBase: React.FC<Props> = ({
  onPressIn,
  onPressOut,
  scaleOut = 0.95,
  children,
  ...props
}) => {
  const scale = useSharedValue(1)
  const animStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(scale.value, { duration: 100 }) }],
  }))

  const onPressInAnim = () => {
    scale.value = scaleOut
    onPressIn?.()
  }

  const onPressOutAnim = () => {
    scale.value = 1
    onPressOut?.()
  }

  return (
    <TouchableWithoutFeedback onPressIn={onPressInAnim} onPressOut={onPressOutAnim} {...props}>
      <Animated.View style={animStyle}>{children}</Animated.View>
    </TouchableWithoutFeedback>
  )
}
