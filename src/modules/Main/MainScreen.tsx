import React from 'react'
import { StyleSheet } from 'react-native'

import { PressableMenu, ScrollBox } from '~/components'
import { HomeRoutes } from '~/constants'
import { colors } from '~/theme'
import { HomeNavigationProps } from '~/types'

export const MainScreen = ({ navigation }: HomeNavigationProps<HomeRoutes.Main>) => {
  const onPressReanimatedAnimations = () => navigation.navigate(HomeRoutes.ReanimatedAnimations)
  const onPressAnimatedNavigation = () => navigation.navigate(HomeRoutes.AnimatedNavigation)

  return (
    <ScrollBox
      bg={colors.bgPrimary}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <PressableMenu title="Reanimated animations" onPress={onPressReanimatedAnimations} />
      <PressableMenu title="Animated navigation" onPress={onPressAnimatedNavigation} />
    </ScrollBox>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
  },
})
