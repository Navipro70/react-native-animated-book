import React from 'react'
import { StyleSheet } from 'react-native'
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'

import { Flex } from '~/components'
import { colors } from '~/theme'

interface PanHandlerContext {
  [key: string]: string | number
  startX: number
  startY: number
}

export const SimpleEventsScreen = () => {
  const pressed = useSharedValue(false)
  const x = useSharedValue(0)
  const y = useSharedValue(0)
  const eventHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, PanHandlerContext>({
    // context is 2 param in every function
    onStart: (_, context) => {
      context.startX = x.value
      context.startY = y.value
      pressed.value = true
    },
    onActive: (event, context) => {
      x.value = context.startX + event.translationX
      y.value = context.startY + event.translationY
    },
    onEnd: () => {
      pressed.value = false
    },
  })
  const ballAnimStyles = useAnimatedStyle(() => ({
    backgroundColor: withSpring(pressed.value ? '#FEEF86' : '#001972'),
    transform: [{ translateX: x.value }, { translateY: y.value }],
  }))

  return (
    <Flex center bg={colors.bgPrimary}>
      <PanGestureHandler onGestureEvent={eventHandler}>
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
