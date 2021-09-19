import React from 'react'
import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ScrollBox } from '~/components'
import { colors } from '~/theme'

import { DropDown, TimingTransitions, SpringTransitions, HelpingTransitions } from './components'

export const BlocksScreen = () => {
  const { bottom } = useSafeAreaInsets()

  return (
    <ScrollBox
      bg={colors.bgPrimary}
      contentContainerStyle={[styles.scrollContainer, { paddingBottom: bottom + 16 }]}
      showsVerticalScrollIndicator={false}
    >
      <DropDown title="Timing transitions">
        <TimingTransitions />
      </DropDown>
      <DropDown title="Spring transitions">
        <SpringTransitions />
      </DropDown>
      <DropDown height={442} title="Helping transitions">
        <HelpingTransitions />
      </DropDown>
    </ScrollBox>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 16,
  },
})
