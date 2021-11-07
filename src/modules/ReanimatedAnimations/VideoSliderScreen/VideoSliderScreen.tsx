import React from 'react'
import { useSharedValue } from 'react-native-reanimated'

import { Flex, Slider } from '~/components'
import { colors } from '~/theme'

const DURATION = 200

export const VideoSliderScreen = () => {
  const progress = useSharedValue(0)

  return (
    <Flex center bg={colors.bgPrimary}>
      <Slider isShowText maxValue={DURATION} progress={progress} />
    </Flex>
  )
}
