import React from 'react'
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated'
import Svg, { Circle, G } from 'react-native-svg'

import { Flex, PressableMenu } from '~/components'
import { colors } from '~/theme'

const SECS = 5

const size = 128
const strokeWidth = 5
const center = size / 2
const radius = size / 2 - strokeWidth - 1
const circumference = 2 * Math.PI * radius

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

export const SvgAnimationsScreen = () => {
  const offset = useSharedValue(circumference)
  const circleAnimProps = useAnimatedProps(() => ({
    strokeDashoffset: -offset.value,
  }))

  return (
    <Flex center bg={colors.white}>
      <Svg height={size} width={size}>
        <G origin={center} rotation="-90">
          <Circle
            cx={center}
            cy={center}
            r={radius}
            stroke={colors.darkGray}
            strokeWidth={strokeWidth}
          />
          <AnimatedCircle
            animatedProps={circleAnimProps}
            cx={center}
            cy={center}
            r={radius}
            stroke={colors.orange}
            strokeDasharray={circumference}
            strokeWidth={strokeWidth}
          />
        </G>
      </Svg>
      <PressableMenu
        title="Start"
        onPress={() => {
          offset.value = withTiming(0, {
            duration: SECS * 1000,
          })
        }}
      />
    </Flex>
  )
}
