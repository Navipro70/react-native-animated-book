import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import React from 'react'

import { ScreenView } from '~/components'
import { AnimatedNavigationRoutes } from '~/constants'

import { AnimatedNavigationMainScreen } from './AnimatedNavigationMainScreen'
import { CustomTransitions } from './CustomTransitions'

const Screen = () => <ScreenView />

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
        component={Screen}
        name={AnimatedNavigationRoutes.RightSlideIOS}
        options={{
          title: 'Right slide IOS',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        component={Screen}
        name={AnimatedNavigationRoutes.BottomModalIOS}
        options={{
          title: 'Bottom modal IOS',
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
      <Stack.Screen
        component={Screen}
        name={AnimatedNavigationRoutes.PresentationModalIOS}
        options={{
          title: 'Presentational modal IOS',
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
      <Stack.Screen
        component={Screen}
        name={AnimatedNavigationRoutes.BottomFadeAndroid}
        options={{
          title: 'Bottom fade Android',
          ...TransitionPresets.FadeFromBottomAndroid,
        }}
      />
      <Stack.Screen
        component={Screen}
        name={AnimatedNavigationRoutes.BottomRevealAndroid}
        options={{
          title: 'Bottom reveal Android',
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        component={Screen}
        name={AnimatedNavigationRoutes.CenterScaleAndroid}
        options={{
          title: 'Center scale Android',
          ...TransitionPresets.ScaleFromCenterAndroid,
        }}
      />
      <Stack.Screen
        component={Screen}
        name={AnimatedNavigationRoutes.DefaultTransition}
        options={{
          title: 'Default transition',
          ...TransitionPresets.DefaultTransition,
        }}
      />
      <Stack.Screen
        component={Screen}
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
        component={Screen}
        name={AnimatedNavigationRoutes.CustomRotateTransition}
        options={{
          title: 'Custom rotate transition',
          ...CustomTransitions.RotateAcross,
        }}
      />
      <Stack.Screen
        component={Screen}
        name={AnimatedNavigationRoutes.CustomOpacityTransition}
        options={{
          title: 'Custom opacity transition',
          ...CustomTransitions.Opacity,
        }}
      />
      <Stack.Screen
        component={Screen}
        name={AnimatedNavigationRoutes.CustomModalTransition}
        options={{
          title: 'Custom modal transition',
          ...CustomTransitions.Modal,
        }}
      />

      <Stack.Screen
        component={Screen}
        name={AnimatedNavigationRoutes.CustomLeftSlide}
        options={{
          title: 'Custom left slide',
          ...CustomTransitions.SlideLeft,
        }}
      />
      <Stack.Screen
        component={Screen}
        name={AnimatedNavigationRoutes.CustomFlipX}
        options={{
          title: 'Custom flip x transition',
          ...CustomTransitions.FlipX,
        }}
      />
      <Stack.Screen
        component={Screen}
        name={AnimatedNavigationRoutes.CustomFlipY}
        options={{
          title: 'Custom flip y transition',
          ...CustomTransitions.FlipY,
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
