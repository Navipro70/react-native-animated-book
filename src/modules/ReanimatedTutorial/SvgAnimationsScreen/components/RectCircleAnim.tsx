import React, { useRef } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated'
import Svg, { Rect } from 'react-native-svg'

import { colors } from '~/theme'

const AnimatedRect = Animated.createAnimatedComponent(Rect)

const SIZE = 100
const STROKE_SIZE = 5

interface Props {
  size?: number
}

export const RectCircleAnim = ({ size = SIZE }: Props) => {
  const isCircle = useRef(false)
  const radius = useSharedValue(0)

  const rectAnimProps = useAnimatedProps(() => ({
    rx: radius.value,
    ry: radius.value,
  }))

  const onPress = () => {
    isCircle.current = !isCircle.current
    radius.value = withTiming(isCircle.current ? size / 2 : 0, { duration: 600 })
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Svg
        height={100}
        viewBox={`${-STROKE_SIZE / 2} ${-STROKE_SIZE / 2} ${SIZE + STROKE_SIZE} ${
          SIZE + STROKE_SIZE
        }`}
        width={100}
      >
        <AnimatedRect
          animatedProps={rectAnimProps}
          height={size}
          stroke={colors.link}
          strokeWidth={STROKE_SIZE}
          width={size}
        />
      </Svg>
    </TouchableOpacity>
  )
}
