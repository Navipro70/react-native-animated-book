import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { HomeRoutes } from '~/constants'

import { MainScreen } from '../Main'
import { ReanimatedTutorialStack } from '../ReanimatedTutorial'

const Stack = createStackNavigator()

export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        component={MainScreen}
        name={HomeRoutes.Main}
        // options={{
        //   ...defaultScreenOptions,
        //   headerLeft: (props) => (
        //     <HeaderBackButton {...props} variant="close" onPress={UserModel.handleLogout} />
        //   ),
        //   headerShown: true,
        //   headerTitle: () => <HeaderTitle title={i18n.headers.password} />,
        // }}
      />
      <Stack.Screen component={ReanimatedTutorialStack} name={HomeRoutes.ReanimatedTutorial} />
    </Stack.Navigator>
  )
}
