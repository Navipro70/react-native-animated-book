import React from 'react'
import { StyleSheet } from 'react-native'

import { PressableMenu, ScrollBox } from '~/components'
import { colors } from '~/theme'

export const AnimatedNavigationMainScreen = () => {
  return (
    <ScrollBox
      bg={colors.bgPrimary}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <PressableMenu title="IOS overlay screen" onPress={() => []} />
    </ScrollBox>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
  },
})
