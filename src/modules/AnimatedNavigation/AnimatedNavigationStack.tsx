import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { AnimatedNavigationRoutes } from '~/constants'

import { AnimatedNavigationMainScreen } from './AnimatedNavigationMainScreen'

const Stack = createStackNavigator()

export const AnimatedNavigationStack = () => {
  return (
    <Stack.Navigator screenOptions={screensOptions}>
      <Stack.Screen
        component={AnimatedNavigationMainScreen}
        name={AnimatedNavigationRoutes.AnimatedNavigationMain}
        options={{ title: 'Animated navigation' }}
      />
    </Stack.Navigator>
  )
}

const screensOptions = {
  headerBackTitleVisible: false,
  headerLeftContainerStyle: {
    left: 6,
  },
}
