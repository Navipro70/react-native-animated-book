import React from 'react'

import { Flex, PressableMenu } from '~/components'
import { ReanimatedTutorialRoutes } from '~/constants'
import { colors } from '~/theme'

export const ReanimatedDocsScreen = ({ navigation }) => {
  const onPressCards = () => navigation.navigate(ReanimatedTutorialRoutes.Transitions)
  const onPressBlocks = () => navigation.navigate(ReanimatedTutorialRoutes.Blocks)

  return (
    <Flex bg={colors.white} p={16}>
      <PressableMenu title="Cards transitions" onPress={onPressCards} />
      <PressableMenu mt={16} title="Blocks transitions" onPress={onPressBlocks} />
    </Flex>
  )
}
