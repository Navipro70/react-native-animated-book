import React from 'react'

import { PressableMenu, Flex } from '~/components'
import { colors } from '~/theme'

export const AnimatedNavigationDocsScreen = () => {
  return (
    <Flex bg={colors.white} p={16}>
      <PressableMenu title="IOS overlay screen" onPress={() => []} />
    </Flex>
  )
}
