import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { HomeRoutes } from '~/constants'

import { AnimatedNavigationStack } from '../AnimatedNavigation'
import { MainScreen } from '../Main'
import { ReanimatedAnimationsStack } from '../ReanimatedAnimations'

const Stack = createStackNavigator()

export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        component={MainScreen}
        name={HomeRoutes.Main}
        options={{
          headerShown: true,
          title: 'Animation types',
        }}
      />
      <Stack.Screen component={ReanimatedAnimationsStack} name={HomeRoutes.ReanimatedAnimations} />
      <Stack.Screen component={AnimatedNavigationStack} name={HomeRoutes.AnimatedNavigation} />
    </Stack.Navigator>
  )
}
