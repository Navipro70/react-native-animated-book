import noop from 'lodash/noop'
import React, { useEffect, useState } from 'react'
import {
  GestureResponderEvent,
  LayoutChangeEvent,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
  runOnJS,
} from 'react-native-reanimated'

import { Box, Span, Row } from '~/components'
import { SCREEN_WIDTH } from '~/constants'
import { colors } from '~/theme'
import { convertSecToTime } from '~/utils'

import { AnimatedText } from './AnimatedText'

Animated.addWhitelistedNativeProps({ text: true })

const THUMB_SIZE = 14
const SLIDE_HEIGHT = 4

interface Props {
  value?: number
  maxValue: number
  progress: Animated.SharedValue<number>
  isShowText?: boolean
  onSlidingStart?: () => void
  onSlidingEnd?: (v: number) => void
}

export const Slider = ({
  maxValue,
  value = 0,
  progress,
  isShowText = false,
  onSlidingEnd = noop,
  onSlidingStart = noop,
}: Props) => {
  const thumbCircleScale = useSharedValue(1)
  const [sliderWidth, setSliderWidth] = useState(0)
  const animatedText = useSharedValue('0:00')

  useEffect(() => {
    const progressWidth = Math.round(value * sliderWidth) / maxValue
    if (progressWidth >= 0 && progressWidth <= maxValue) progress.value = progressWidth
  }, [value])

  const sliderValue = useDerivedValue(() => {
    return Math.round((progress.value / sliderWidth) * maxValue)
  })

  const progressAnimStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: progress.value }],
  }))

  useDerivedValue(() => {
    animatedText.value = convertSecToTime(sliderValue.value)
  })

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { lastProgress: number }
  >({
    onStart: (event) => {
      runOnJS(onSlidingStart)()
      thumbCircleScale.value = 1.42
      progress.value = event.x
    },
    onActive: (event) => {
      progress.value = event.x
      if (event.x < 0) progress.value = 0
      else if (event.x > sliderWidth) progress.value = sliderWidth
    },
    onEnd: () => {
      thumbCircleScale.value = 1
      runOnJS(onSlidingEnd)(sliderValue.value)
    },
  })

  const animatedHandleStyle = useAnimatedStyle(() => ({
    top: (SLIDE_HEIGHT - THUMB_SIZE) / 2,
    transform: [{ translateX: progress.value - THUMB_SIZE / 2 }],
  }))

  const thumbCircleAnimStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(thumbCircleScale.value, { duration: 150 }) }],
  }))

  const onLayout = (e: LayoutChangeEvent) => {
    setSliderWidth(e.nativeEvent.layout.width)
  }

  const onPress = (e: GestureResponderEvent) => {
    progress.value = e.nativeEvent.pageX - (SCREEN_WIDTH - sliderWidth) / 2
  }

  return (
    <Box px={36} width="100%">
      <TouchableOpacity activeOpacity={1} onPress={onPress}>
        <PanGestureHandler minDist={0} waitFor={onPress} onGestureEvent={onGestureEvent}>
          <Animated.View
            hitSlop={{ top: 10, bottom: 10 }}
            style={styles.container}
            onLayout={onLayout}
          >
            <Animated.View style={[styles.thumb, animatedHandleStyle]}>
              <Animated.View style={[styles.thumbCircle, thumbCircleAnimStyle]} />
            </Animated.View>

            <Row style={styles.progressContainer}>
              <Animated.View style={[styles.progress, progressAnimStyle]} />
            </Row>
          </Animated.View>
        </PanGestureHandler>
      </TouchableOpacity>
      {isShowText && (
        <Row justifyContent="space-between" mt={12}>
          <AnimatedText text={animatedText} />
          <Span children={convertSecToTime(maxValue)} />
        </Row>
      )}
    </Box>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.orange,
    borderRadius: 3,
    height: SLIDE_HEIGHT,
    width: '100%',
  },
  progressContainer: {
    overflow: 'hidden',
    width: '100%',
    height: 4,
  },
  progress: {
    width: `100%`,
    height: 4,
    backgroundColor: colors.darkGray,
    position: 'absolute',
  },
  thumb: {
    zIndex: 1,
    position: 'absolute',
  },
  thumbCircle: {
    backgroundColor: colors.orange,
    borderRadius: 20,
    width: THUMB_SIZE,
    height: THUMB_SIZE,
  },
})
