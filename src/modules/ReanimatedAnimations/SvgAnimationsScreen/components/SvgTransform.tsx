import React from 'react'
import Animated, { useSharedValue, useAnimatedProps, withTiming } from 'react-native-reanimated'
import Svg, { Path } from 'react-native-svg'

import { PressableMenu } from '~/components'

const AnimatedPath = Animated.createAnimatedComponent(Path)

export const SvgTransform = () => {
  const transformedTop = useSharedValue(0)
  const transformedBottom = useSharedValue(0)
  const pathAnimProps = useAnimatedProps(() => ({
    d: `M0 50     C 50 ${transformedTop.value}      50 ${transformedBottom.value}      100 50  `,
  }))

  const onPress = () => {
    transformedTop.value = withTiming(transformedTop.value === 50 ? 0 : 50)
    transformedBottom.value = withTiming(transformedBottom.value === 50 ? 100 : 50)
  }

  return (
    <>
      <Svg height="300" width="300">
        <AnimatedPath
          animatedProps={pathAnimProps}
          fill="transparent"
          stroke="red"
          strokeWidth="2"
        />
      </Svg>
      <PressableMenu title="Start animation" onPress={onPress} />
    </>
  )
}
