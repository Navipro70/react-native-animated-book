import React from 'react'

import { PressableMenu, SafeAreaFlex } from '~/components'
import { HomeRoutes } from '~/constants'
import { colors } from '~/theme'
import { HomeNavigationProps } from '~/types'

export const MainScreen = ({ navigation }: HomeNavigationProps<HomeRoutes.Main>) => {
  const onPressReanimatedTutorial = () => navigation.navigate(HomeRoutes.ReanimatedTutorial)
  const onPressAnimatedNavigation = () => navigation.navigate(HomeRoutes.AnimatedNavigation)

  return (
    <SafeAreaFlex bg={colors.white} p={16}>
      <PressableMenu title="Reanimated tutorial" onPress={onPressReanimatedTutorial} />
      <PressableMenu mt={16} title="Animated navigation" onPress={onPressAnimatedNavigation} />
    </SafeAreaFlex>
  )
}
