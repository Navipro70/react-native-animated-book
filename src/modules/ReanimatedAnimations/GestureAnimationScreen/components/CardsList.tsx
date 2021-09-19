import { range } from 'lodash'
import React from 'react'
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import { Box } from '~/components'
import { colors } from '~/theme'

export const CardsList = () => {
  const renderItem = () => {
    return <Box backgroundColor={colors.green} borderRadius={16} height={200} width={132} />
  }

  return (
    <FlatList
      horizontal
      ItemSeparatorComponent={() => <Box width={16} />}
      contentContainerStyle={styles.containerStyle}
      data={range(10)}
      keyExtractor={String}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
    />
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: 16,
  },
})
