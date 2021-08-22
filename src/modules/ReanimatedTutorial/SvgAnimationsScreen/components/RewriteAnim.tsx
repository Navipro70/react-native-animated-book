import React, { useRef } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import { useSharedValue, useAnimatedProps, withTiming } from 'react-native-reanimated'
import Svg, { Polygon } from 'react-native-svg'

const AnimatedPolygon = Animated.createAnimatedComponent(Polygon)

const DRAWED = 550
const NOT_DRAWED = 1000

export const RewriteAnim = () => {
  const visible = useRef(true)
  const draw = useSharedValue(DRAWED)

  const animProps = useAnimatedProps(() => ({
    strokeDashoffset: draw.value,
  }))

  const onPress = () => {
    visible.current = !visible.current
    draw.value = withTiming(visible.current ? DRAWED : NOT_DRAWED, { duration: 2000 })
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Svg height="110" viewBox="-10 -10 120 120" width="110">
        <AnimatedPolygon
          animatedProps={animProps}
          fill="none"
          points="0 50, 20 10, 50 0, 80 10, 100 50, 10 80, 50 100, 90, 80"
          stroke="red"
          strokeDasharray="980"
          strokeWidth={5}
        />
      </Svg>
    </TouchableOpacity>
  )
}
