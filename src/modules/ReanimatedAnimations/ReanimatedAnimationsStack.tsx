import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { ReanimatedTutorialRoutes } from '~/constants'

import { AnimatedButtonsScreen } from './AnimatedButtonsScreen'
import { AnimatedControllerScreen } from './AnimatedControllerScreen'
import { BlocksScreen } from './BlocksScreen'
import { CustomSlider } from './CusomSlider'
import { GestureAnimationScreen } from './GestureAnimationScreen'
import { ReanimatedAnimationsMainScreen } from './ReanimatedAnimationsMainScreen'
import { SimpleEventsScreen } from './SimpleEventsScreen'
import { SvgAnimationsScreen } from './SvgAnimationsScreen'
import { TinderCardsScreen } from './TinderCardsScreen'
import { TransitionsScreen } from './TransitionsScreen'
import { TwistLoadingScreen } from './TwistScreen'

const Stack = createStackNavigator()

export const ReanimatedAnimationsStack = () => {
  return (
    <Stack.Navigator screenOptions={screensOptions}>
      <Stack.Screen
        component={ReanimatedAnimationsMainScreen}
        name={ReanimatedTutorialRoutes.ReanimatedAnimationsMain}
        options={{ title: 'Reanimated animations' }}
      />

      <Stack.Screen
        component={AnimatedButtonsScreen}
        name={ReanimatedTutorialRoutes.AnimatedButtons}
        options={{ title: 'Animated buttons' }}
      />
      <Stack.Screen
        component={BlocksScreen}
        name={ReanimatedTutorialRoutes.Blocks}
        options={{ title: 'Elements transitions' }}
      />
      <Stack.Screen
        component={TransitionsScreen}
        name={ReanimatedTutorialRoutes.Transitions}
        options={{ title: 'Cards rotations' }}
      />
      <Stack.Screen
        component={SimpleEventsScreen}
        name={ReanimatedTutorialRoutes.SimpleEvents}
        options={{ title: 'Gesture event' }}
      />

      <Stack.Screen
        component={TinderCardsScreen}
        name={ReanimatedTutorialRoutes.TinderCards}
        options={{ title: 'Tinder cards' }}
      />
      <Stack.Screen
        component={TwistLoadingScreen}
        name={ReanimatedTutorialRoutes.TwistLoading}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={CustomSlider}
        name={ReanimatedTutorialRoutes.CustomSlider}
        options={{ title: 'Video player slider' }}
      />
      <Stack.Screen
        component={GestureAnimationScreen}
        name={ReanimatedTutorialRoutes.GestureAnimation}
        options={{ title: 'Сomplicated cards gesture' }}
      />

      <Stack.Screen
        component={SvgAnimationsScreen}
        name={ReanimatedTutorialRoutes.SvgAnimations}
        options={{ title: 'SVG animations' }}
      />
      <Stack.Screen
        component={AnimatedControllerScreen}
        name={ReanimatedTutorialRoutes.AnimatedController}
        options={{ title: 'Exercises controller' }}
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
