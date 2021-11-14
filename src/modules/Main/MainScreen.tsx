import React from 'react'
import { StyleSheet } from 'react-native'

import { PressableMenu, ScrollBox } from '~/components'
import { HomeRoutes } from '~/constants'
import { colors } from '~/theme'
import { HomeNavigationProps } from '~/types'

export const MainScreen = ({ navigation: { navigate } }: HomeNavigationProps<HomeRoutes.Main>) => {
  const onPressReanimatedAnimations = () => navigate(HomeRoutes.ReanimatedAnimations)
  const onPressAnimatedNavigation = () => navigate(HomeRoutes.AnimatedNavigation)
  const onPressAnimatedLayout = () => navigate(HomeRoutes.AnimatedLayout)

  return (
    <ScrollBox
      bg={colors.bgPrimary}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <PressableMenu title="Reanimated Animations" onPress={onPressReanimatedAnimations} />
      <PressableMenu title="Animated Navigation" onPress={onPressAnimatedNavigation} />
      <PressableMenu title="Animated Layout" onPress={onPressAnimatedLayout} />
    </ScrollBox>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
  },
})
