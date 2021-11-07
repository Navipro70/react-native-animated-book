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
  const onPressTwist = () => navigate(ReanimatedTutorialRoutes.TwistLoading)
  const onPressGesture = () => navigate(ReanimatedTutorialRoutes.GestureAnimation)
  const onPressRgb = () => navigate(ReanimatedTutorialRoutes.Rgb)
  const onPressVideoSlider = () => navigate(ReanimatedTutorialRoutes.VideoSlider)
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
      <PressableMenu title="Twist loading" onPress={onPressTwist} />
      <PressableMenu title="RGB color picker" onPress={onPressRgb} />
      <PressableMenu title="Video player slider" onPress={onPressVideoSlider} />
      <PressableMenu title="Complicated cards gesture" onPress={onPressGesture} />
      <PressableMenu mb={32} title="Tinder cards" onPress={onPressTinder} />
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
