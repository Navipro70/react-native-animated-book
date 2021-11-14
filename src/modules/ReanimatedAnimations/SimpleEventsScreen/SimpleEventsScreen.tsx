import { useHeaderHeight } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import Animated, {
  interpolateColor,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'

import { Flex } from '~/components'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '~/constants'
import { colors } from '~/theme'

const BALL_SIZE = 100

interface PanHandlerContext {
  [key: string]: string | number
  startX: number
  startY: number
}

export const SimpleEventsScreen = () => {
  const headerHeight = useHeaderHeight()
  const pressed = useSharedValue(0)
  const x = useSharedValue(0)
  const y = useSharedValue(0)

  const ballAnimStyles = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(pressed.value, [1, 0], ['#FEEF86', '#001972']),
    transform: [{ translateX: x.value }, { translateY: y.value }],
  }))

  const eventHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, PanHandlerContext>({
    // context is 2 param in every function
    onStart: (_, context) => {
      context.startX = x.value
      context.startY = y.value
      pressed.value = withSpring(1)
    },
    onActive: (event, context) => {
      x.value = context.startX + event.translationX
      y.value = context.startY + event.translationY
    },
    onEnd: () => {
      if (
        x.value < -(SCREEN_WIDTH - BALL_SIZE) / 2 ||
        x.value > (SCREEN_WIDTH - BALL_SIZE) / 2 ||
        y.value > (SCREEN_HEIGHT - BALL_SIZE - headerHeight) / 2 ||
        y.value < -(SCREEN_HEIGHT - BALL_SIZE - headerHeight) / 2
      ) {
        x.value = withSpring(0)
        y.value = withSpring(0)
      }
      pressed.value = withSpring(0)
    },
  })

  return (
    <Flex center bg={colors.bgPrimary}>
      <PanGestureHandler minDist={0} onGestureEvent={eventHandler}>
        <Animated.View style={[styles.ball, ballAnimStyles]} />
      </PanGestureHandler>
    </Flex>
  )
}

const styles = StyleSheet.create({
  ball: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
})
