import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { ReanimatedTutorialRoutes } from '~/constants'

import { AnimatedButtonsScreen } from './AnimatedButtonsScreen'
import { AnimatedControllerScreen } from './AnimatedControllerScreen'
import { BlocksScreen } from './BlocksScreen'
import { CustomSlider } from './CusomSlider'
import { GestureAnimationScreen } from './GestureAnimationScreen/GestureAnimationScreen'
import { ReanimatedDocsScreen } from './ReanimatedDocsScreen'
import { SimpleEventsScreen } from './SimpleEventsScreen'
import { SvgAnimationsScreen } from './SvgAnimationsScreen'
import { TransitionsScreen } from './TransitionsScreen'
import { TwistLoadingScreen } from './TwistScreen'

//https://www.youtube.com/watch?v=wEVjaXK4sYQ&ab_channel=freeCodeCamp.org

const Stack = createStackNavigator()

export const ReanimatedTutorialStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ReanimatedDocsScreen}
        name={ReanimatedTutorialRoutes.ReanimatedDocs}
      />
      <Stack.Screen
        component={AnimatedButtonsScreen}
        name={ReanimatedTutorialRoutes.AnimatedButtons}
      />
      <Stack.Screen component={BlocksScreen} name={ReanimatedTutorialRoutes.Blocks} />
      <Stack.Screen component={TransitionsScreen} name={ReanimatedTutorialRoutes.Transitions} />
      <Stack.Screen component={SimpleEventsScreen} name={ReanimatedTutorialRoutes.SimpleEvents} />
      <Stack.Screen
        component={AnimatedControllerScreen}
        name={ReanimatedTutorialRoutes.AnimatedController}
      />
      <Stack.Screen component={SvgAnimationsScreen} name={ReanimatedTutorialRoutes.SvgAnimations} />
      <Stack.Screen
        component={TwistLoadingScreen}
        name={ReanimatedTutorialRoutes.TwistLoading}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={GestureAnimationScreen}
        name={ReanimatedTutorialRoutes.GestureAnimation}
      />
      <Stack.Screen component={CustomSlider} name={ReanimatedTutorialRoutes.CustomSlider} />
    </Stack.Navigator>
  )
}
