import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
  withDelay,
  withRepeat,
  runOnJS,
} from 'react-native-reanimated'
import { withPause } from 'react-native-redash'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Box, Flex, PressableMenu, Span } from '~/components'
import { SCREEN_WIDTH } from '~/constants'
import { colors } from '~/theme'

enum PlayerTypes {
  Grip = 'Grip',
  Easy = 'Easy',
  Hold = 'Hold',
}

// FYI: 1 rep = 2000 second (1000 - Exercise, (500 + 500) - Rest )
export const playerConfig = [
  {
    title: 'Greep',
    reps: 10,
    type: PlayerTypes.Grip,
    mainDuration: 1000,
    restDuration: 500,
    delay: 500,
    index: 0,
  },
  {
    title: 'Rest',
    reps: 10,
    type: PlayerTypes.Easy,
    mainDuration: 4000,
    restDuration: 1000,
    delay: 100,
    index: 1,
  },
  {
    title: 'Hold',
    reps: 10,
    type: PlayerTypes.Hold,
    mainDuration: 2500,
    restDuration: 1000,
    delay: 500,
    index: 2,
  },
]

export const AnimatedControllerScreen = ({ navigation }) => {
  const [exercise, setExercise] = useState(playerConfig[0])
  const { bottom } = useSafeAreaInsets()
  const paused = useSharedValue(false)
  const scale = useSharedValue(1)
  const animatedCircleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }))

  const onUpdateReps = () => {
    setExercise((item) => ({
      ...item,
      reps: item.reps - 1,
    }))
  }

  const onNewAnim = () => {
    scale.value = withPause(
      withRepeat(
        withSequence(
          withDelay(
            exercise.delay,
            withTiming(1, {
              duration: exercise.restDuration / 2,
            }),
          ),
          withTiming(0.7, { duration: exercise.mainDuration }),
          withDelay(
            exercise.delay,
            withTiming(
              1,
              {
                duration: exercise.mainDuration / 2,
              },
              () => runOnJS(onUpdateReps)(),
            ),
          ),
        ),
        -1,
      ),
      paused,
    )
  }

  useEffect(() => {
    const newExercise = playerConfig[exercise.index + 1]
    if (exercise.reps < 0) {
      if (newExercise) {
        setExercise(newExercise)
      } else {
        navigation.goBack()
      }
    }
  }, [exercise.reps])

  useEffect(() => {
    onNewAnim()
  }, [])

  const onSwitchPause = () => {
    paused.value = !paused.value
  }

  return (
    <Flex center bg={colors.bgPrimary} pb={bottom}>
      <Flex center>
        <Box style={styles.wrapCircle}>
          <Box style={styles.absoluteText}>
            <Span children={exercise.title} color={colors.white} fontSize={24} type="bold" />
          </Box>
          <Animated.View style={[animatedCircleStyle, styles.wrapCircle, styles.bg]} />
        </Box>
      </Flex>
      <PressableMenu height={80} title="Start stop" onPress={onSwitchPause} />
    </Flex>
  )
}

const styles = StyleSheet.create({
  wrapCircle: {
    borderRadius: SCREEN_WIDTH - 75,
    width: SCREEN_WIDTH - 75,
    height: SCREEN_WIDTH - 75,
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
