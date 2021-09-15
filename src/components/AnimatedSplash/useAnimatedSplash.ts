import { useEffect, useState } from 'react'
import RNBootSplash from 'react-native-bootsplash'
import { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

export const useAnimatedSplash = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const splashProgress = useSharedValue(1)

  const containerAnimStyle = useAnimatedStyle(() => ({
    opacity: splashProgress.value,
  }))

  const imageAnimStyle = useAnimatedStyle(() => ({
    transform: [{ scale: splashProgress.value }],
  }))

  useEffect(() => {
    const init = async () => {
      await RNBootSplash.hide({ fade: false })
      splashProgress.value = withTiming(0, { duration: 200 }, () => {
        runOnJS(setIsSplashVisible)(false)
      })
    }

    isImageLoaded && void init()
  }, [isImageLoaded])

  const onFinishImageLoading = () => setIsImageLoaded(true)

  return {
    isSplashVisible,
    containerAnimStyle,
    imageAnimStyle,
    isImageLoaded,
    onFinishImageLoading,
  }
}
