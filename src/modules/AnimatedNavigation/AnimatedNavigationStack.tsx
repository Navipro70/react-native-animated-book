import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { AnimatedNavigationRoutes } from '~/constants'

import { AnimatedNavigationDocsScreen } from './AnimatedNavigationDocsScreen'

const Stack = createStackNavigator()

export const AnimatedNavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={AnimatedNavigationDocsScreen}
        name={AnimatedNavigationRoutes.AnimatedNavigationDocs}
      />
    </Stack.Navigator>
  )
}
