import React from 'react'
import { StyleSheet } from 'react-native'
import {
  PanGestureHandler,
  TapGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  withDecay,
} from 'react-native-reanimated'

import { colors } from '~/theme'

import { CardsList } from './components'

const animConfig = {
  duration: 300,
  easing: Easing.bezier(0.7, 0, 0.3, 1),
}

interface Context {
  [key: string]: string | number
  minTranslateY: number
  maxTranslateY: number
}

export const GestureAnimationScreen = () => {
  const cardsTranslate = useSharedValue(0)

  const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, Context>({
    onStart: (_, ctx) => {
      ctx.minTranslateY = Math.abs(cardsTranslate.value)
      ctx.maxTranslateY = -150 + Math.abs(cardsTranslate.value)
    },
    onActive: (event, ctx) => {
      if (event.translationY > 0) {
        cardsTranslate.value =
          event.translationY < ctx.minTranslateY
            ? event.translationY - ctx.minTranslateY
            : withTiming(0, { duration: 150 })
      } else {
        cardsTranslate.value =
          event.translationY > ctx.maxTranslateY
            ? event.translationY - ctx.minTranslateY
            : withTiming(-150, { duration: 150 })
      }
    },
    onEnd: (event, ctx) => {
      cardsTranslate.value = withDecay(
        { velocity: event.velocityY, clamp: [-150, 0] },
        (isFinished) => {
          const changeZone = -ctx.minTranslateY < -75 ? -110 : -40
          if (cardsTranslate.value == 0 || cardsTranslate.value === -150) return
          else if (isFinished) {
            cardsTranslate.value = withTiming(
              cardsTranslate.value < changeZone ? -150 : 0,
              animConfig,
            )
          }
        },
      )
    },
  })

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: cardsTranslate.value }],
  }))

  const onOpenByPress = () => {
    cardsTranslate.value = withTiming(cardsTranslate.value < -75 ? 0 : -150, animConfig)
  }

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={styles.container}>
        <TapGestureHandler onEnded={onOpenByPress}>
          <Animated.View style={animatedStyle}>
            <CardsList />
          </Animated.View>
        </TapGestureHandler>
      </Animated.View>
    </PanGestureHandler>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 80,
    backgroundColor: colors.bgPrimary,
  },
})
