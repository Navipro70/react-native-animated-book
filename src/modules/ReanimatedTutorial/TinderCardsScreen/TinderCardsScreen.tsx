import { delay, dropRight } from 'lodash'
import React, { useState } from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Flex } from '~/components'
import { colors } from '~/theme'

import { Card } from './components'
import { createTinderCards } from './constants'

export const TinderCardsScreen = () => {
  const { bottom } = useSafeAreaInsets()
  const [loading, setLoading] = useState(false)
  const [cards, setCards] = useState(createTinderCards())

  const removeCard = async () => {
    setCards((v) => dropRight(v, 1))
    if (cards.length <= 5 && !loading) {
      setLoading(true)
      delay(() => {
        setCards((v) => [...createTinderCards(), ...v])
        setLoading(false)
      }, 5000)
    }
  }

  return (
    <Flex bg={colors.white}>
      <Flex mb={bottom + 50} mt={50} mx={24}>
        {loading && (
          <Flex center bg={colors.white} style={styles.loading}>
            <ActivityIndicator animating color={colors.link} size="large" />
          </Flex>
        )}
        {cards.map((item, index) => (
          <Card
            key={item.id}
            removeCard={removeCard}
            {...item}
            isActive={cards.length - 1 === index}
            isPrev={cards.length - 2 === index}
          />
        ))}
      </Flex>
    </Flex>
  )
}

const styles = StyleSheet.create({
  loading: {
    transform: [{ scale: 0.95 }],
    borderRadius: 16,
    shadowColor: colors.black,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,
    elevation: 7,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -100,
  },
})
