import React from 'react'
import { StyleSheet } from 'react-native'

import { PressableMenu, ScrollBox } from '~/components'
import { AnimatedLayoutRoutes } from '~/constants/Routes/AnimatedLayoutRoutes'
import { colors } from '~/theme'

export const AnimatedLayoutMainScreen = ({ navigation: { navigate } }) => {
  const onPressEnteringAnim = () => navigate(AnimatedLayoutRoutes.EnteringAnimations)

  return (
    <ScrollBox
      bg={colors.bgPrimary}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <PressableMenu title="Default layout animations" onPress={onPressEnteringAnim} />
    </ScrollBox>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
  },
})
