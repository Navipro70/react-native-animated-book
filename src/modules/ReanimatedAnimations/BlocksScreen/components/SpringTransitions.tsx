import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

import { PressableView, Span, Box } from '~/components'
import { colors } from '~/theme'

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const CALCULATED_WIDTH = SCREEN_WIDTH - 124

export const SpringTransitions = () => {
  const offset = useSharedValue(0)
  const defaultSpringStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(offset.value * CALCULATED_WIDTH) }],
  }))
  const customSpringStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withSpring(offset.value * CALCULATED_WIDTH, {
          damping: 5,
          stiffness: 100,
          mass: 1.2,
        }),
      },
    ],
  }))

  const startAnimation = () => (offset.value = Math.random())

  return (
    <Box p={16}>
      <Span children="Default spring transtion" mb={16} />
      <Animated.View style={[styles.box, defaultSpringStyles]} />
      <Span children="Custom spring transtion" my={16} />
      <Animated.View style={[styles.box, customSpringStyles]} />
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
