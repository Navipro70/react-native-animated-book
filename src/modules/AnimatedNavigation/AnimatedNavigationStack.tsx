import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import React from 'react'

import { AnimatedNavigationRoutes } from '~/constants'

import { AnimatedNavigationMainScreen } from './AnimatedNavigationMainScreen'
import { BottomFadeAndroidScreen } from './BottomFadeAndroidScreen'
import { BottomModalIOSScreen } from './BottomModalIOSScreen'
import { BottomRevealAndroidScreen } from './BottomRevealAndroidScreen'
import { CenterScaleAndroidScreen } from './CenterScaleAndroidScreen'
import { CustomModalTransitionScreen } from './CustomModalTransitionScreen'
import { CustomOpacityTransitionScreen } from './CustomOpacityTransitionScreen'
import { CustomRotateTransitionScreen } from './CustomRotateTransitionScreen'
import { DefaultModalTransitionScreen } from './DefaultModalTransitionScreen'
import { DefaultTransitionScreen } from './DefaultTransitionScreen'
import { PresentationModalIOSScreen } from './PresentationModalIOSScreen'
import { RightSlideIOSScreen } from './RightSlideIOSScreen'

const Stack = createStackNavigator()

export const AnimatedNavigationStack = () => {
  return (
    <Stack.Navigator screenOptions={{ ...screensOptions }}>
      <Stack.Screen
        component={AnimatedNavigationMainScreen}
        name={AnimatedNavigationRoutes.AnimatedNavigationMain}
        options={{ title: 'Animated navigation' }}
      />
      <Stack.Screen
        component={RightSlideIOSScreen}
        name={AnimatedNavigationRoutes.RightSlideIOS}
        options={{
          title: 'Right slide IOS',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        component={BottomModalIOSScreen}
        name={AnimatedNavigationRoutes.BottomModalIOS}
        options={{
          title: 'Bottom modal IOS',
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
      <Stack.Screen
        component={PresentationModalIOSScreen}
        name={AnimatedNavigationRoutes.PresentationModalIOS}
        options={{
          title: 'Presentational modal IOS',
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
      <Stack.Screen
        component={BottomFadeAndroidScreen}
        name={AnimatedNavigationRoutes.BottomFadeAndroid}
        options={{
          title: 'Bottom fade Android',
          ...TransitionPresets.FadeFromBottomAndroid,
        }}
      />
      <Stack.Screen
        component={BottomRevealAndroidScreen}
        name={AnimatedNavigationRoutes.BottomRevealAndroid}
        options={{
          title: 'Bottom reveal Android',
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        component={CenterScaleAndroidScreen}
        name={AnimatedNavigationRoutes.CenterScaleAndroid}
        options={{
          title: 'Center scale Android',
          ...TransitionPresets.ScaleFromCenterAndroid,
        }}
      />
      <Stack.Screen
        component={DefaultTransitionScreen}
        name={AnimatedNavigationRoutes.DefaultTransition}
        options={{
          title: 'Default transition',
          ...TransitionPresets.DefaultTransition,
        }}
      />
      <Stack.Screen
        component={DefaultModalTransitionScreen}
        name={AnimatedNavigationRoutes.DefaultModalTransition}
        options={{
          title: 'Default modal transition',
          ...TransitionPresets.ModalTransition,
        }}
      />
      {/**
       * TODO make flip and other https://github.com/plmok61/react-navigation-transitions
       */}
      <Stack.Screen
        component={CustomRotateTransitionScreen}
        name={AnimatedNavigationRoutes.CustomRotateTransition}
        options={{
          title: 'Custom rotate transition',
          //https://callstack.com/blog/custom-screen-transitions-in-react-navigation/
        }}
      />
      <Stack.Screen
        component={CustomOpacityTransitionScreen}
        name={AnimatedNavigationRoutes.CustomOpacityTransition}
        options={{
          title: 'Custom opacity transition',
        }}
      />
      <Stack.Screen
        component={CustomModalTransitionScreen}
        name={AnimatedNavigationRoutes.CustomModalTransition}
        options={{
          title: 'Custom modal transition',
        }}
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
