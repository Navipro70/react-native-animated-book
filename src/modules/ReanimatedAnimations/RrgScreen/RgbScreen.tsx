import React from 'react'
import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated'

import { AnimatedBox, Span, Slider } from '~/components'
import { colors } from '~/theme'

export const RgbScreen = () => {
  const redProgress = useSharedValue(0)
  const greenProgress = useSharedValue(0)
  const blueProgress = useSharedValue(0)

  const containerAnimStyle = useAnimatedStyle(() => ({
    backgroundColor: `rgb(${redProgress.value}, ${greenProgress.value}, ${blueProgress.value})`,
  }))

  return (
    <AnimatedBox center flex={1} style={containerAnimStyle}>
      <Span children="Red" color={colors.strictRed} my={24} type="bold20" />
      <Slider maxValue={255} progress={redProgress} />
      <Span children="Green" color={colors.strictGreen} my={24} type="bold20" />
      <Slider maxValue={255} progress={greenProgress} />
      <Span children="Blue" color={colors.strictBlue} my={24} type="bold20" />
      <Slider maxValue={255} progress={blueProgress} />
    </AnimatedBox>
  )
}
