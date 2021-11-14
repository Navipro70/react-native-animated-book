import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { HomeRoutes } from '~/constants'

import { AnimatedLayoutStack } from '../AnimatedLayout/AnimatedLayoutStack'
import { AnimatedNavigationStack } from '../AnimatedNavigation'
import { MainScreen } from '../Main'
import { ReanimatedAnimationsStack } from '../ReanimatedAnimations'

const { Navigator, Screen } = createStackNavigator()

export const HomeStack = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        component={MainScreen}
        name={HomeRoutes.Main}
        options={{ headerShown: true, title: 'Animation types' }}
      />
      <Screen component={ReanimatedAnimationsStack} name={HomeRoutes.ReanimatedAnimations} />
      <Screen component={AnimatedNavigationStack} name={HomeRoutes.AnimatedNavigation} />
      <Screen component={AnimatedLayoutStack} name={HomeRoutes.AnimatedLayout} />
    </Navigator>
  )
}
