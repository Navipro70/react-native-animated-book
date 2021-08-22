import React from 'react'

import { Flex, PressableMenu } from '~/components'
import { ReanimatedTutorialRoutes } from '~/constants'
import { colors } from '~/theme'

export const ReanimatedDocsScreen = ({ navigation: { navigate } }) => {
  const onPressButtons = () => navigate(ReanimatedTutorialRoutes.AnimatedButtons)
  const onPressCards = () => navigate(ReanimatedTutorialRoutes.Transitions)
  const onPressBlocks = () => navigate(ReanimatedTutorialRoutes.Blocks)
  const onPressSimpleEvents = () => navigate(ReanimatedTutorialRoutes.SimpleEvents)
  const onPressController = () => navigate(ReanimatedTutorialRoutes.AnimatedController)
  const onPressSvg = () => navigate(ReanimatedTutorialRoutes.SvgAnimations)
  const onPressTwist = () => navigate(ReanimatedTutorialRoutes.TwistLoading)
  const onPressGesture = () => navigate(ReanimatedTutorialRoutes.GestureAnimation)
  const onPressSlider = () => navigate(ReanimatedTutorialRoutes.CustomSlider)
  const onPressTinder = () => navigate(ReanimatedTutorialRoutes.TinderCards)

  return (
    <Flex bg={colors.white} p={16}>
      <PressableMenu title="Animated buttons" onPress={onPressButtons} />
      <PressableMenu mt={16} title="Cards transitions" onPress={onPressCards} />
      <PressableMenu mt={16} title="Blocks transitions" onPress={onPressBlocks} />
      <PressableMenu mt={16} title="Simple events" onPress={onPressSimpleEvents} />
      <PressableMenu mt={16} title="Animated controller" onPress={onPressController} />
      <PressableMenu mt={16} title="Svg animations" onPress={onPressSvg} />
      <PressableMenu mt={16} title="Twist loading" onPress={onPressTwist} />
      <PressableMenu mt={16} title="Gesture animation" onPress={onPressGesture} />
      <PressableMenu mt={16} title="Custom slider" onPress={onPressSlider} />
      <PressableMenu mt={16} title="Tinder cards" onPress={onPressTinder} />
    </Flex>
  )
}
