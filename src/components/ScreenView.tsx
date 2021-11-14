import { useHeaderHeight } from '@react-navigation/stack'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Icons } from '~/assets'
import { colors } from '~/theme'

import { Flex, Span } from './primitives'

export const ScreenView = () => {
  const headerHeight = useHeaderHeight()
  const { bottom } = useSafeAreaInsets()

  return (
    <Flex center bg={colors.white} pb={bottom + headerHeight}>
      <Icons.Telegram />
      <Span children="Hello from screen view" my={16} textAlign="center" type="bold22" />
      <Span
        children={`This screen just an example.\nI think it used for present default\nanimation to presentations screen`}
        textAlign="center"
        type="main16"
      />
    </Flex>
  )
}
