import * as React from 'react'
import { useRef } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'
import { useAnimatedProps } from 'react-native-reanimated'
import Svg, { SvgProps, Ellipse } from 'react-native-svg'

const AnimatedEllipse = Animated.createAnimatedComponent(Ellipse)

export const EllipseBounce = (props: SvgProps) => {
  const bounced = useRef(false)
  const bounce = useSharedValue(1)
  const animProps = useAnimatedProps(() => ({
    rx: 50 + 50 * bounce.value,
    ry: 100 - 50 * bounce.value,
    cx: 110,
    cy: 110,
  }))

  const onPress = () => {
    bounced.current = !bounced.current
    bounce.value = withSpring(Number(bounced.current))
  }

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Svg {...props} height={220} width={220}>
        <AnimatedEllipse animatedProps={animProps} fill="#4af3ff" />
      </Svg>
    </TouchableOpacity>
  )
}
