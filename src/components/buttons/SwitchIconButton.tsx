import React from 'react'
import { StyleSheet, Pressable, PressableProps, GestureResponderEvent } from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  withSpring,
  useSharedValue,
} from 'react-native-reanimated'

import { Box } from '../primitives'

interface Props extends PressableProps {
  activeIcon: JSX.Element
  inactiveIcon: JSX.Element
  initialPressed: boolean
}

export const SwitchIconButton = ({
  initialPressed,
  activeIcon,
  inactiveIcon,
  onPress,
  ...props
}: Props) => {
  const [pressed, setPressed] = React.useState(initialPressed)
  const selected = useSharedValue(Number(initialPressed))
  const svgAnimStyle = useAnimatedStyle(() => ({
    opacity: interpolate(selected.value, [0, 1], [1, 0], Extrapolate.EXTEND),
    transform: [{ scale: interpolate(selected.value, [0, 1], [1, 0], Extrapolate.EXTEND) }],
  }))
  const buttonAnimStyle = useAnimatedStyle(() => ({
    opacity: selected.value,
    transform: [{ scale: selected.value }],
  }))

  const onPressAnim = (e: GestureResponderEvent) => {
    setPressed((v) => !v)
    selected.value = withSpring(pressed ? 0 : 1)
    onPress?.(e)
  }

  return (
    <Box center>
      <Pressable onPress={onPressAnim} {...props}>
        <Animated.View style={svgAnimStyle}>{inactiveIcon}</Animated.View>
        <Animated.View style={[StyleSheet.absoluteFillObject, buttonAnimStyle]}>
          {activeIcon}
        </Animated.View>
      </Pressable>
    </Box>
  )
}
