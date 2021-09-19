import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { HomeRoutes } from '~/constants'

interface HomeScreensParams extends Record<string, object | undefined> {
  [HomeRoutes.Main]: undefined
  [HomeRoutes.ReanimatedAnimations]: undefined
}

export interface HomeNavigationProps<Route extends HomeRoutes> {
  navigation: StackNavigationProp<HomeScreensParams, Route>
  route: RouteProp<HomeScreensParams, Route>
}
