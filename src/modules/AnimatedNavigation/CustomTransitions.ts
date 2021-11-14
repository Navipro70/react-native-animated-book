import {
  HeaderStyleInterpolators,
  StackNavigationOptions,
  TransitionSpecs,
} from '@react-navigation/stack'
import { TransitionSpec } from '@react-navigation/stack/lib/typescript/src/types'
import { Easing } from 'react-native'

import { SCREEN_WIDTH } from '~/constants'
import { colors } from '~/theme'

const animConfig: TransitionSpec = {
  animation: 'timing',
  config: {
    duration: 400,
    easing: Easing.inOut(Easing.ease),
  },
}

const RotateAcross: StackNavigationOptions = {
  gestureResponseDistance: {
    horizontal: SCREEN_WIDTH,
  },
  transitionSpec: {
    open: animConfig,
    close: animConfig,
  },
  cardOverlayEnabled: true,
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({ current, next, layouts }) => ({
    overlayStyle: {
      backgroundColor: colors.white,
      opacity: current.progress,
    },

    containerStyle: {
      transform: [
        {
          scale: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0.8, 1],
          }),
        },
      ],
    },

    cardStyle: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
      transform: [
        {
          scale: next
            ? next.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0.8],
              })
            : 1,
        },
        {
          translateX: current.progress.interpolate({
            inputRange: [0.33, 1],
            outputRange: [layouts.screen.width, 0],
          }),
        },
        {
          rotate: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0.5, 0],
          }),
        },
      ],
    },
  }),
}

const Opacity: StackNavigationOptions = {
  gestureEnabled: true,
  transitionSpec: {
    open: animConfig,
    close: animConfig,
  },
  cardStyleInterpolator: ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  }),
}

const Modal: StackNavigationOptions = {
  gestureDirection: 'vertical-inverted',
  transitionSpec: {
    open: animConfig,
    close: animConfig,
  },
  cardOverlayEnabled: true,
  cardStyleInterpolator: ({ current, layouts }) => ({
    overlayStyle: {
      backgroundColor: colors.black,
      opacity: current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.3],
      }),
    },
    cardStyle: {
      transform: [
        { translateY: -layouts.screen.height },
        {
          translateY: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, layouts.screen.height],
          }),
        },
      ],
    },
  }),
}

const SlideLeft: StackNavigationOptions = {
  gestureDirection: 'horizontal-inverted',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardShadowEnabled: true,
  cardStyleInterpolator: ({ current, layouts, next }) => ({
    shadowStyle: {
      opacity: 1,
    },
    cardStyle: {
      transform: [
        {
          translateX: next
            ? next.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, layouts.screen.width / 2],
              })
            : 1,
        },
        { translateX: -layouts.screen.width },
        {
          translateX: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, layouts.screen.width],
          }),
        },
      ],
    },
  }),
}

const getFlip = (direction: 'X' | 'Y'): StackNavigationOptions => ({
  gestureEnabled: false,
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: ({ current, next }) => ({
    cardStyle: {
      transform: [
        {
          [direction === 'Y' ? 'rotateX' : 'rotateY']: (next ? next : current).progress.interpolate(
            {
              inputRange: [0, 1],
              outputRange: next ? ['0deg', '90deg'] : ['90deg', '0deg'],
            },
          ),
        },
      ],
    },
  }),
})

export const CustomTransitions = {
  RotateAcross,
  Opacity,
  Modal,
  SlideLeft,
  FlipX: getFlip('X'),
  FlipY: getFlip('Y'),
}
