import React from 'react'
import { StyleSheet } from 'react-native'
import Animated, { withTiming, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'

import { Span, PressableView } from '~/components'
import { colors } from '~/theme'

const NEARLY_HEIGHT = 306

interface Props {
  title: string
  height?: number
}

export const DropDown: React.FC<Props> = ({ title, children, height = NEARLY_HEIGHT }) => {
  const transition = useSharedValue(0)

  const contentStyle = useAnimatedStyle(() => ({
    overflow: 'hidden',
    maxHeight: withTiming(transition.value * height),
    opacity: withTiming(transition.value),
  }))

  const onSwitch = () => {
    transition.value = transition.value === 0 ? 1 : 0
  }

  return (
    <PressableView style={styles.container} onPress={onSwitch}>
      <Span center children={title} mb={12} />
      <Animated.View style={contentStyle}>{children}</Animated.View>
    </PressableView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightPink,
    borderRadius: 8,
    paddingTop: 12,
    marginBottom: 16,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
})
