import React, { useState } from 'react'

import { Flex } from '~/components'
import { colors } from '~/theme'

import { Slider } from './components/Slider'

export const CustomSlider = () => {
  const [value, setValue] = useState(0)
  const onSlidingStart = () => []

  const onSlidingEnd = (v: number) => setValue(v)

  return (
    <Flex center bg={colors.bgPrimary}>
      <Slider
        maxValue={1384}
        value={value}
        onSlidingEnd={onSlidingEnd}
        onSlidingStart={onSlidingStart}
      />
    </Flex>
  )
}
