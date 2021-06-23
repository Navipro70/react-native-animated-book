import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { ReanimatedTutorialRoutes } from '~/constants'

import { BlocksScreen } from './BlocksScreen'
import { ReanimatedDocsScreen } from './ReanimatedDocsScreen'
import { SimpleEventsScreen } from './SimpleEventsScreen'
import { TransitionsScreen } from './TransitionsScreen'

//https://www.youtube.com/watch?v=wEVjaXK4sYQ&ab_channel=freeCodeCamp.org

const Stack = createStackNavigator()

export const ReanimatedTutorialStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ReanimatedDocsScreen}
        name={ReanimatedTutorialRoutes.ReanimatedDocs}
      />
      <Stack.Screen component={BlocksScreen} name={ReanimatedTutorialRoutes.Blocks} />
      <Stack.Screen component={TransitionsScreen} name={ReanimatedTutorialRoutes.Transitions} />
      <Stack.Screen component={SimpleEventsScreen} name={ReanimatedTutorialRoutes.SimpleEvents} />
    </Stack.Navigator>
  )
}
