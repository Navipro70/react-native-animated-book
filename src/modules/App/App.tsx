import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Platform, StatusBar, UIManager } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components'

import { AnimatedSplash } from '~/components/AnimatedSplash/AnimatedSplash'
import { useAnimatedSplash } from '~/components/AnimatedSplash/useAnimatedSplash'
import { colors, theme } from '~/theme'

import { HomeStack } from './HomeStack'

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true)
  }
}

export const App = () => {
  const splashProps = useAnimatedSplash()

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <SafeAreaProvider>
          <StatusBar backgroundColor={colors.transparent} barStyle="dark-content" />
          <AnimatedSplash {...splashProps} />
          <HomeStack />
        </SafeAreaProvider>
      </NavigationContainer>
    </ThemeProvider>
  )
}
