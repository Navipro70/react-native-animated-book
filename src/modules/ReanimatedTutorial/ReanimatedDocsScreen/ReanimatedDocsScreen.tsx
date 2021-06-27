import React from 'react'

import { Flex, PressableMenu } from '~/components'
import { ReanimatedTutorialRoutes } from '~/constants'
import { colors } from '~/theme'

export const ReanimatedDocsScreen = ({ navigation }) => {
  const onPressButtons = () => navigation.navigate(ReanimatedTutorialRoutes.AnimatedButtons)
  const onPressCards = () => navigation.navigate(ReanimatedTutorialRoutes.Transitions)
  const onPressBlocks = () => navigation.navigate(ReanimatedTutorialRoutes.Blocks)
  const onPressSimpleEvents = () => navigation.navigate(ReanimatedTutorialRoutes.SimpleEvents)
  const onPressController = () => navigation.navigate(ReanimatedTutorialRoutes.AnimatedController)
  const onPressTwist = () => navigation.navigate(ReanimatedTutorialRoutes.TwistLoading)

  return (
    <Flex bg={colors.white} p={16}>
      <PressableMenu title="Animated buttons" onPress={onPressButtons} />
      <PressableMenu mt={16} title="Cards transitions" onPress={onPressCards} />
      <PressableMenu mt={16} title="Blocks transitions" onPress={onPressBlocks} />
      <PressableMenu mt={16} title="Simple events" onPress={onPressSimpleEvents} />
      <PressableMenu mt={16} title="Animated controller" onPress={onPressController} />
      <PressableMenu mt={16} title="Twist loading" onPress={onPressTwist} />
    </Flex>
  )
}
