import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated'

import { PressableView, Span, Box } from '~/components'
import { colors } from '~/theme'

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const CALCULATED_WIDTH = SCREEN_WIDTH - 124

export const HelpingTransitions = () => {
  const offset = useSharedValue(0)
  const defaultDelaySpringStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withDelay(1000, withSpring(offset.value * CALCULATED_WIDTH)) }],
  }))
  const customRepeatSpringStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withRepeat(
          withSpring(offset.value * CALCULATED_WIDTH, {
            damping: 5,
            stiffness: 100,
            mass: 1.2,
          }),
          3,
          true,
        ),
      },
    ],
  }))
  const springSequenceStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withSequence(
          withTiming(offset.value * CALCULATED_WIDTH - 50, { duration: 100 }),
          withSpring(offset.value * CALCULATED_WIDTH, {
            damping: 5,
            stiffness: 100,
            mass: 1.2,
          }),
        ),
      },
    ],
  }))

  const startAnimation = () => (offset.value = Math.random())

  return (
    <Box p={16}>
      <Span children="Default spring + withDelay transtion" mb={16} />
      <Animated.View style={[styles.box, defaultDelaySpringStyles]} />
      <Span children="Custom spring + withRepeat transtion" my={16} />
      <Animated.View style={[styles.box, customRepeatSpringStyles]} />
      <Span children="Custom timing and spring + withSequence transtion" my={16} />
      <Animated.View style={[styles.box, springSequenceStyles]} />
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
