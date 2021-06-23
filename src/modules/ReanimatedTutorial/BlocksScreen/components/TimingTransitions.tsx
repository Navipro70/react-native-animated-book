import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { PressableView, Span, Box } from '~/components'
import { colors } from '~/theme'

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const CALCULATED_WIDTH = SCREEN_WIDTH - 124

export const TimingTransitions = () => {
  const offset = useSharedValue(0)
  const defaultTimingStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withTiming(offset.value * CALCULATED_WIDTH) }],
  }))
  const customTimingStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(offset.value * CALCULATED_WIDTH, {
          duration: 700,
          easing: Easing.bezier(0.5, 0.01, 0.02, 1),
        }),
      },
    ],
  }))

  const startAnimation = () => (offset.value = Math.random())

  return (
    <Box p={16}>
      <Span children="Default timing transtion" mb={16} />
      <Animated.View style={[styles.box, defaultTimingStyles]} />
      <Span children="Custom timing transtion" my={16} />
      <Animated.View style={[styles.box, customTimingStyle]} />
      <PressableView
        center
        bg={colors.orange}
        borderRadius={8}
        mt={16}
        p={12}
        onPress={startAnimation}
      >
        <Span children="Move" color={colors.white} />
      </PressableView>
    </Box>
  )
}

const styles = StyleSheet.create({
  box: {
    width: 60,
    height: 60,
    backgroundColor: colors.iosBlue,
    borderRadius: 8,
  },
})
