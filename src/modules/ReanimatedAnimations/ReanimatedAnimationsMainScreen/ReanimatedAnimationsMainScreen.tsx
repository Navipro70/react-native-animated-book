import React from 'react'
import { StyleSheet } from 'react-native'

import { PressableMenu, ScrollBox } from '~/components'
import { ReanimatedTutorialRoutes } from '~/constants'
import { colors } from '~/theme'

export const ReanimatedAnimationsMainScreen = ({ navigation: { navigate } }) => {
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
    <ScrollBox
      bg={colors.bgPrimary}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <PressableMenu title="Animated buttons" onPress={onPressButtons} />
      <PressableMenu title="Cards rotations" onPress={onPressCards} />
      <PressableMenu title="Elements transitions" onPress={onPressBlocks} />
      <PressableMenu title="Gesture event" onPress={onPressSimpleEvents} />

      <PressableMenu mt={32} title="Tinder cards" onPress={onPressTinder} />
      <PressableMenu title="Twist loading TODO пофиксить андроид" onPress={onPressTwist} />
      <PressableMenu title="Video player slider" onPress={onPressSlider} />
      <PressableMenu title="Complicated cards gesture" onPress={onPressGesture} />
      <PressableMenu
        title="SVG animations TODO (красиво оформить, дополнить анимации кривых и показать анимации с dashboard offset (постепенная отрисовка)"
        onPress={onPressSvg}
      />
      <PressableMenu
        title="Exercises controller TODO придумать идею и доделать"
        onPress={onPressController}
      />
    </ScrollBox>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
  },
})
