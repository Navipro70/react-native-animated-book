import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import Animated, {
  interpolate,
  useAnimatedStyle,
  withTiming,
  useSharedValue,
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { cardsImgs } from '~/assets'
import { ImageBox, Flex, PressableView, Span } from '~/components'
import { SCREEN_WIDTH } from '~/constants'
import { colors } from '~/theme'

export const TransitionsScreen = () => {
  const { bottom } = useSafeAreaInsets()
  const [, setToggled] = useState(false)
  const transition = useSharedValue(0)

  const switchToggled = () => {
    setToggled((v) => {
      transition.value = withTiming(Number(!v))
      return !v
    })
  }

  return (
    <Flex bg={colors.bgPrimary}>
      <Flex center>
        {(cardsImgs as string[]).map((source, index) => {
          return <Card index={index} key={source} source={source} transition={transition} />
        })}
      </Flex>
      <PressableView center bg={colors.iosBlue} pb={24 + bottom} pt={24} onPress={switchToggled}>
        <Span children="Switch" color={colors.white} fontSize={30} type="bold" />
      </PressableView>
    </Flex>
  )
}

const Card = ({ transition, index, source }) => {
  const rotation = useAnimatedStyle(() => {
    const rotate = interpolate(transition.value, [0, 1], [0, 10 * index])
    return { transform: [{ translateX: 100 }, { rotate: `${rotate}deg` }, { translateX: -100 }] }
  })

  return (
    <Animated.View key={source} style={[styles.overlay, rotation]}>
      <ImageBox height={221} resizeMode="contain" source={source} width={SCREEN_WIDTH} />
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
