import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withRepeat,
  withTiming,
  withDelay,
  withSpring,
} from 'react-native-reanimated'

import { foodsImgs } from '~/assets'
import { Flex } from '~/components'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '~/constants'
import { colors } from '~/theme'

const HALF_SCREEN_HEIGHT = SCREEN_HEIGHT / 2
const DOUBLE_SCREEN_HEIGHT = SCREEN_HEIGHT * 2

export const TwistLoadingScreen = () => {
  const overlayTranslate = useSharedValue(0)
  const twistRotate = useSharedValue(90)
  const plateScale = useSharedValue(0)
  const overlayTranslateAnimStyle = useAnimatedStyle(() => ({
    display: overlayTranslate.value === HALF_SCREEN_HEIGHT ? 'none' : 'flex',
    transform: [{ translateY: overlayTranslate.value }],
  }))
  const overlayRotationAnimStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: SCREEN_HEIGHT },
      { rotate: `${twistRotate.value}deg` },
      { translateY: -SCREEN_HEIGHT },
    ],
  }))
  const overlayCardAnimStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: SCREEN_HEIGHT },
      { scale: plateScale.value },
      { rotate: `-${twistRotate.value}deg` },
    ],
  }))
  const staticCardAnimStyle = useAnimatedStyle(() => ({
    transform: [{ scale: plateScale.value }],
  }))

  useEffect(() => {
    overlayTranslate.value = withDelay(200, withTiming(HALF_SCREEN_HEIGHT, { duration: 600 }))
    plateScale.value = withDelay(1000, withSpring(1))
    twistRotate.value = withRepeat(
      withSequence(
        withDelay(400, withTiming(360, { duration: 800 })),
        withTiming(90, { duration: 800 }),
        withDelay(400, withTiming(360, { duration: 800 })),
      ),
      -1,
      true,
    )
  }, [])

  return (
    <Flex center>
      <Animated.View style={[styles.overlayTransition, overlayTranslateAnimStyle]} />
      <Animated.View style={[styles.overlayRotation, overlayRotationAnimStyle]}>
        <Animated.Image source={foodsImgs.iceCream} style={[styles.card, overlayCardAnimStyle]} />
      </Animated.View>
      <Animated.View style={styles.absoluteCenter}>
        <Animated.Image source={foodsImgs.borkkoli} style={[styles.card, staticCardAnimStyle]} />
      </Animated.View>
    </Flex>
  )
}

const styles = StyleSheet.create({
  overlayRotation: {
    height: DOUBLE_SCREEN_HEIGHT,
    width: DOUBLE_SCREEN_HEIGHT,
    top: -SCREEN_HEIGHT,
    overflow: 'hidden',
    zIndex: 100,
    backgroundColor: colors.yellow,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: SCREEN_WIDTH - 100,
    width: SCREEN_WIDTH - 100,
    borderRadius: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  absoluteCenter: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  overlayTransition: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10000,
    height: HALF_SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: colors.white,
  },
})
