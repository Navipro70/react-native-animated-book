import React from 'react'
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Flex } from '~/components'
import { colors } from '~/theme'

import { DropDown, TimingTransitions, SpringTransitions, HelpingTransitions } from './components'

export const BlocksScreen = () => {
  const { bottom } = useSafeAreaInsets()

  return (
    <Flex bg={colors.white}>
      <ScrollView
        contentContainerStyle={[styles.scrollContainer, { paddingBottom: bottom + 16 }]}
        style={styles.scroll}
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
      </ScrollView>
    </Flex>
  )
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: colors.white,
  },
  scrollContainer: {
    padding: 16,
  },
})
