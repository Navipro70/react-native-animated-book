import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
  withDelay,
  withRepeat,
} from 'react-native-reanimated'

import { Box, Flex, Span } from '~/components'
import { SCREEN_WIDTH } from '~/constants'
import { colors } from '~/theme'

enum PlayerTypes {
  Squeze = 'Squeze',
  Rest = 'Rest',
  Hold = 'Hold',
}

// FYI: 1 rep = 2000 second (1000 - Exercise, (500 + 500) - Rest )
export const playerConfig = [
  { reps: 10, type: PlayerTypes.Squeze },
  { reps: 10, type: PlayerTypes.Squeze },
  { reps: 10, type: PlayerTypes.Squeze },
]

export const AnimatedControllerScreen = () => {
  const scale = useSharedValue(1)
  const animatedCircleStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: scale.value,
      },
    ],
  }))

  const onNewAnim = () => {
    scale.value = withRepeat(
      withSequence(
        withDelay(500, withTiming(1)),
        withTiming(0.7, { duration: 1000 }),
        withDelay(500, withTiming(1)),
      ),
      -1,
      true,
    )
  }

  useEffect(() => {
    onNewAnim()
  }, [])

  // const switchControl = () => {
  //   cancelAnimation(scale)
  // }

  return (
    <Flex center>
      <Flex center>
        <Box style={styles.wrapCircle}>
          <Box style={styles.absoluteText}>
            <Span children="Squeze" color={colors.white} fontSize={24} type="bold" />
          </Box>
          <Animated.View style={[animatedCircleStyle, styles.wrapCircle, styles.bg]} />
        </Box>
      </Flex>
      {/* <PressableMenu title="Start stop" onPress={switchControl} />
      <PressableMenu title="new anim" onPress={onNewAnim} /> */}
    </Flex>
  )
}

const styles = StyleSheet.create({
  wrapCircle: {
    borderRadius: SCREEN_WIDTH - 50,
    width: SCREEN_WIDTH - 50,
    height: SCREEN_WIDTH - 50,
    backgroundColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  absoluteText: {
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,
    zIndex: 100,
  },
})
