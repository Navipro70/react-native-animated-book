import React, { useState } from 'react'
import { StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Animated, {
  interpolate,
  useAnimatedStyle,
  withTiming,
  useSharedValue,
} from 'react-native-reanimated'

import { cardsImgs } from '~/assets'
import { SafeAreaBox, ImageBox, Flex, Span } from '~/components'

export const TransitionsScreen = () => {
  const [toggled, setToggled] = useState(false)
  const transition = useSharedValue(0)

  const switchToggled = () => {
    transition.value = withTiming(Number(toggled))
    setToggled((v) => !v)
  }

  return (
    <SafeAreaBox flex={1} p={32}>
      <Flex center>
        {cardsImgs.map((source, index) => {
          return <Card index={index} key={source} source={source} transition={transition} />
        })}
      </Flex>
      <TouchableWithoutFeedback onPress={switchToggled}>
        <Span children="start" />
      </TouchableWithoutFeedback>
    </SafeAreaBox>
  )
}

const Card = ({ transition, index, source }) => {
  const rotation = useAnimatedStyle(() => {
    const rotate = interpolate(transition.value, [0, 1], [0, 10 * index])
    return { transform: [{ translateX: 100 }, { rotate: `${rotate}deg` }, { translateX: -100 }] }
  })

  return (
    <Animated.View key={source} style={[styles.overlay, rotation]}>
      <ImageBox height={221} resizeMode="contain" source={source} width="100%" />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
