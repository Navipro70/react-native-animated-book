import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { AnimatedLayoutRoutes } from '~/constants/Routes/AnimatedLayoutRoutes'

import { AnimatedLayoutMainScreen } from './AnimatedLayoutMainScreen'
import { EnteringAnimationsScreen } from './EnteringAnimationsScreen'

const { Navigator, Screen } = createStackNavigator()

export const AnimatedLayoutStack = () => (
  <Navigator screenOptions={{ headerBackTitleVisible: false }}>
    <Screen
      component={AnimatedLayoutMainScreen}
      name={AnimatedLayoutRoutes.AnimatedLayoutMain}
      options={{ title: 'Animated layout' }}
    />
    <Screen
      component={EnteringAnimationsScreen}
      name={AnimatedLayoutRoutes.EnteringAnimations}
      options={{ title: 'Entering animations' }}
    />
  </Navigator>
)
