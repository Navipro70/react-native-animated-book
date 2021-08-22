import { dropRight } from 'lodash'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  interpolate,
  withTiming,
  runOnJS,
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Flex } from '~/components'
import { SCREEN_WIDTH } from '~/constants'
import { colors } from '~/theme'

import { Card } from './components'
import { tinderCards } from './constants'

const SWIPE_OFFSET = SCREEN_WIDTH / 4

export const TinderCardsScreen = () => {
  const [cards, setCards] = useState(tinderCards)
  const { bottom } = useSafeAreaInsets()
  const x = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: x.value }, { rotateZ: `${interpolate(x.value, [0, 1000], [0, 1])}` }],
  }))

  const onNextCard = () => {
    setTimeout(() => {
      x.value = 0
      setCards((v) => dropRight(v, 1))
    }, 300)
  }

  const panGesture = useAnimatedGestureHandler({
    onActive: (e) => {
      x.value = e.translationX
    },
    onEnd: () => {
      if (Math.abs(x.value) > SWIPE_OFFSET * 2) {
        x.value = withTiming(SWIPE_OFFSET * (x.value > 0 ? 5 : -5), { duration: 250 })
        runOnJS(onNextCard)()
      } else {
        x.value = withSpring(0)
      }
    },
  })

  return (
    <Flex bg={colors.white} pb={bottom}>
      <PanGestureHandler minDist={0} onGestureEvent={panGesture}>
        <Animated.View style={styles.container}>
          {cards.map((item, index) => (
            <Card
              animatedStyle={animatedStyle}
              key={item.id}
              {...item}
              isActive={cards.length - 1 === index}
            />
          ))}
        </Animated.View>
      </PanGestureHandler>
    </Flex>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
    marginVertical: 50,
  },
})
