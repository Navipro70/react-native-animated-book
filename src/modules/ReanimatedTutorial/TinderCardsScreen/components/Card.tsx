import React, { useEffect } from 'react'
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

import { Box, Flex, ImageBox, Span } from '~/components'
import { SCREEN_WIDTH } from '~/constants'
import { colors } from '~/theme'

const SWIPE_OFFSET = SCREEN_WIDTH / 4

interface ICard {
  id: string
  title: string
  description: string
  date: string
  imgUrl: string
}

interface Props extends ICard {
  isActive: boolean
  isPrev: boolean
  removeCard: () => void
}

export const Card = ({ isActive, isPrev, imgUrl, date, title, description, removeCard }: Props) => {
  const scale = useSharedValue(isActive ? 1 : 0.95)
  const x = useSharedValue(0)

  useEffect(() => {
    scale.value = withTiming(isActive ? 1 : 0.95)
  }, [isActive])

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scale.value },
      { translateX: x.value },
      { rotateZ: `${interpolate(x.value, [0, 1000], [0, 1])}` },
    ],
  }))

  const onNextCard = () => {
    setTimeout(removeCard, 300)
  }

  const panGesture = useAnimatedGestureHandler({
    onActive: (e) => {
      x.value = e.translationX
    },
    onEnd: () => {
      if (Math.abs(x.value) > SWIPE_OFFSET * 2) {
        x.value = withTiming(SWIPE_OFFSET * (x.value > 0 ? 5 : -5), { duration: 260 })
        runOnJS(onNextCard)()
      } else {
        x.value = withSpring(0)
      }
    },
  })

  if (!isPrev && !isActive) return null

  return (
    <PanGestureHandler minDist={0} onGestureEvent={panGesture}>
      <Animated.View style={[styles.container, animatedStyle, !isActive && styles.notSelected]}>
        <Flex>
          <Box style={styles.badge}>
            <Span children={date} color={colors.white} textAlign="center" type="bold14" />
          </Box>
          <ImageBox
            bg={colors.gray}
            borderTopLeftRadius={16}
            borderTopRightRadius={16}
            flex={1}
            resizeMode="cover"
            source={{ uri: imgUrl }}
          />
        </Flex>
        <Flex p={20}>
          <Span children={title} mx={16} numberOfLines={2} textAlign="center" type="bold20" />
          <Span
            children={description}
            color={colors.darkestGray}
            mt={8}
            numberOfLines={10}
            type="main18"
          />
        </Flex>
      </Animated.View>
    </PanGestureHandler>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'visible',
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 10,
    backgroundColor: colors.white,
    borderRadius: 16,
    shadowColor: colors.black,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,
    elevation: 7,
  },
  notSelected: {
    zIndex: 1,
  },
  badge: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.orange,
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 11,
  },
})
