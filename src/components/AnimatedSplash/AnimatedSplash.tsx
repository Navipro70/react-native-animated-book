import React from 'react'
import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

import { images } from '~/assets'
import { colors } from '~/theme'

import { useAnimatedSplash } from './useAnimatedSplash'

type Props = ReturnType<typeof useAnimatedSplash>

export const AnimatedSplash = ({
  isSplashVisible,
  containerAnimStyle,
  imageAnimStyle,
  onFinishImageLoading,
}: Props) => {
  if (!isSplashVisible) return null

  return (
    <AnimatedContainer style={containerAnimStyle}>
      <Animated.Image
        source={images.logo}
        style={imageAnimStyle}
        onLoadEnd={onFinishImageLoading}
      />
    </AnimatedContainer>
  )
}

const AnimatedContainer = styled(Animated.View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.white};
  z-index: 100;
`
