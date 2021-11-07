import React from 'react'
import { StyleSheet } from 'react-native'

import { PressableMenu, ScrollBox } from '~/components'
import { AnimatedNavigationRoutes } from '~/constants'
import { colors } from '~/theme'

export const AnimatedNavigationMainScreen = ({ navigation: { navigate } }) => {
  const onRightSlideIOS = () => navigate(AnimatedNavigationRoutes.RightSlideIOS)
  const onBottomModalIOS = () => navigate(AnimatedNavigationRoutes.BottomModalIOS)
  const onPresentationalModalIOS = () => navigate(AnimatedNavigationRoutes.PresentationModalIOS)
  const onBottomFadeAndroid = () => navigate(AnimatedNavigationRoutes.BottomFadeAndroid)
  const onBottomRevealAndroid = () => navigate(AnimatedNavigationRoutes.BottomRevealAndroid)
  const onCenterScaleAndroid = () => navigate(AnimatedNavigationRoutes.CenterScaleAndroid)
  const onDefaultTransition = () => navigate(AnimatedNavigationRoutes.DefaultTransition)
  const onDefaultModalTransition = () => navigate(AnimatedNavigationRoutes.DefaultModalTransition)
  const onCustomOpacityTransition = () => navigate(AnimatedNavigationRoutes.CustomOpacityTransition)
  const onCustomModalTransition = () => navigate(AnimatedNavigationRoutes.CustomModalTransition)
  const onCustomRotateTransition = () => navigate(AnimatedNavigationRoutes.CustomRotateTransition)

  return (
    <ScrollBox
      bg={colors.bgPrimary}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <PressableMenu title="Right slide IOS" onPress={onRightSlideIOS} />
      <PressableMenu title="Bottom modal IOS" onPress={onBottomModalIOS} />
      <PressableMenu title="Presentational modal IOS" onPress={onPresentationalModalIOS} />
      <PressableMenu title="Bottom fade Android" onPress={onBottomFadeAndroid} />
      <PressableMenu title="Bottom reveal Android" onPress={onBottomRevealAndroid} />
      <PressableMenu title="Center scale Android" onPress={onCenterScaleAndroid} />
      <PressableMenu title="Default transition" onPress={onDefaultTransition} />
      <PressableMenu title="Default modal transition" onPress={onDefaultModalTransition} />
      <PressableMenu title="Custom rotate transition" onPress={onCustomRotateTransition} />
      <PressableMenu title="Custom opacity transition" onPress={onCustomOpacityTransition} />
      <PressableMenu title="Custom modal transition" onPress={onCustomModalTransition} />
    </ScrollBox>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
  },
})
