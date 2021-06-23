import React from 'react'

import { PressableMenu, SafeAreaFlex } from '~/components'
import { HomeRoutes } from '~/constants'
import { colors } from '~/theme'
import { HomeNavigationProps } from '~/types'

export const MainScreen = ({ navigation }: HomeNavigationProps<HomeRoutes.Main>) => {
  const onPressReanimatedTutorial = () => navigation.navigate(HomeRoutes.ReanimatedTutorial)

  return (
    <SafeAreaFlex bg={colors.white} p={16}>
      <PressableMenu title="Reanimated tutorial" onPress={onPressReanimatedTutorial} />
    </SafeAreaFlex>
  )
}
