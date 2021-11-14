import React, { useState } from 'react'
import { StyleSheet, ViewProps } from 'react-native'
import Animated, { AnimateProps } from 'react-native-reanimated'

import { PressableView, Span } from '~/components'
import { colors } from '~/theme'

interface Props extends AnimateProps<ViewProps> {
  title: string
}

export const LayoutCard = ({ style, title, ...props }: Props) => {
  const [isOpened, setIsOpened] = useState(false)

  const onSwitch = () => setIsOpened((v) => !v)

  if (isOpened) {
    return (
      <PressableView style={[styles.container, styles.notExisted]} onPress={onSwitch}>
        <Span children={title} style={styles.notText} />
      </PressableView>
    )
  }

  return (
    <PressableView onPress={onSwitch}>
      <Animated.View style={[styles.container, style]} {...props}>
        <Span children={title} style={styles.text} />
      </Animated.View>
    </PressableView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: colors.link,
    borderWidth: 1,
    borderColor: colors.link,
  },
  text: {
    color: colors.white,
  },
  notExisted: {
    backgroundColor: colors.transparent,
  },
  notText: {
    color: colors.link,
  },
})
