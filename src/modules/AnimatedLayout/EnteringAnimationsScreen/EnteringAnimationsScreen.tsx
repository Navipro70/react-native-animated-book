import React from 'react'
import {
  BounceInDown,
  BounceInLeft,
  BounceInUp,
  BounceOutRight,
  BounceOutUp,
  FadeInDown,
  FadeInRight,
  FadeInUp,
  FadeOutLeft,
  FadeOutUp,
  FlipInEasyX,
  FlipInXDown,
  FlipInYRight,
  FlipOutEasyY,
  FlipOutXDown,
  FlipOutYLeft,
  LightSpeedInLeft,
  LightSpeedInRight,
  LightSpeedOutLeft,
  LightSpeedOutRight,
  PinwheelIn,
  PinwheelOut,
  RollInLeft,
  RollInRight,
  RollOutLeft,
  RollOutRight,
  RotateInDownLeft,
  RotateInUpRight,
  RotateOutDownLeft,
  RotateOutUpRight,
  SlideInDown,
  SlideInLeft,
  SlideInUp,
  SlideOutRight,
  SlideOutUp,
  StretchInX,
  StretchInY,
  StretchOutX,
  StretchOutY,
  ZoomIn,
  ZoomInEasyUp,
  ZoomInLeft,
  ZoomOut,
  ZoomOutEasyDown,
  ZoomOutRight,
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ScrollBox } from '~/components'

import { LayoutCard } from './components'

export const EnteringAnimationsScreen = () => {
  const { bottom } = useSafeAreaInsets()

  const containerStyle = { padding: 16, paddingBottom: bottom + 16 }

  return (
    <ScrollBox contentContainerStyle={containerStyle}>
      <LayoutCard entering={FadeInUp} exiting={FadeOutUp} title="Fade in/out up" />
      <LayoutCard entering={FadeInRight} exiting={FadeOutLeft} title="Fade in right, out left" />
      <LayoutCard entering={FadeInDown} exiting={FadeOutUp} title="Fade in down, out up" />

      <LayoutCard entering={BounceInUp} exiting={BounceOutUp} title="Bounce in/out up" />
      <LayoutCard
        entering={BounceInLeft}
        exiting={BounceOutRight}
        title="Bounce in left, out right"
      />
      <LayoutCard entering={BounceInDown} exiting={BounceOutUp} title="Bounce in down, out up" />

      <LayoutCard entering={FlipInXDown} exiting={FlipOutXDown} title="Flip in/out down" />
      <LayoutCard
        entering={FlipInEasyX}
        exiting={FlipOutEasyY}
        title="Flip in easy X, out easy Y"
      />
      <LayoutCard
        entering={FlipInYRight}
        exiting={FlipOutYLeft}
        title="Flip in y right, out y left"
      />

      <LayoutCard entering={StretchInX} exiting={StretchOutX} title="Stretch in/out x" />
      <LayoutCard entering={StretchInY} exiting={StretchOutY} title="Stretch in/out y" />
      <LayoutCard entering={StretchInX} exiting={StretchOutY} title="Stretch in x, out y" />
      <LayoutCard entering={StretchInY} exiting={StretchOutX} title="Stretch in y, out x" />

      <LayoutCard entering={ZoomIn} exiting={ZoomOut} title="Zoom in/out" />
      <LayoutCard entering={ZoomInLeft} exiting={ZoomOutRight} title="Zoom in left, out right" />
      <LayoutCard
        entering={ZoomInEasyUp}
        exiting={ZoomOutEasyDown}
        title="Zoom in easy up, out easy down"
      />

      <LayoutCard entering={SlideInUp} exiting={SlideOutUp} title="Slide in/out up" />
      <LayoutCard entering={SlideInLeft} exiting={SlideOutRight} title="Slide in left, out right" />
      <LayoutCard entering={SlideInDown} exiting={SlideOutUp} title="Slide in down, out up" />

      <LayoutCard
        entering={LightSpeedInLeft}
        exiting={LightSpeedOutRight}
        title="Light speed in left, out right"
      />
      <LayoutCard
        entering={LightSpeedInRight}
        exiting={LightSpeedOutLeft}
        title="Light speed in right, out left"
      />

      <LayoutCard entering={PinwheelIn} exiting={PinwheelOut} title="Pinwheel in/out" />

      <LayoutCard entering={RollInLeft} exiting={RollOutRight} title="Roll in left, out right" />
      <LayoutCard entering={RollInRight} exiting={RollOutLeft} title="Roll in right, out left" />

      <LayoutCard
        entering={RotateInUpRight}
        exiting={RotateOutUpRight}
        title="Rotate in/out up right"
      />
      <LayoutCard
        entering={RotateInDownLeft}
        exiting={RotateOutDownLeft}
        title="Rotate in/out down left"
      />
    </ScrollBox>
  )
}
