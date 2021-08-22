import React from 'react'
import { StyleSheet } from 'react-native'
import Animated from 'react-native-reanimated'

import { Box, Flex, ImageBox, Span } from '~/components'
import { colors } from '~/theme'

interface ICard {
  id: string
  title: string
  description: string
  date: string
  imgUrl: string
}

interface Props extends ICard {
  isActive: boolean
  animatedStyle: object
}

export const Card = ({ isActive, animatedStyle, imgUrl, date, title, description }: Props) => {
  return (
    <Animated.View style={[isActive ? animatedStyle : styles.notSelected, styles.container]}>
      <Flex>
        <Box style={styles.badge}>
          <Span children={date} color={colors.white} textAlign="center" type="bold14" />
        </Box>
        <ImageBox
          bg={colors.gray}
          borderTopLeftRadius={16}
          borderTopRightRadius={16}
          flex={1}
          resizeMode="cover"
          source={{ uri: imgUrl }}
        />
      </Flex>
      <Flex p={20}>
        <Span children={title} numberOfLines={1} textAlign="center" type="bold22" />
        <Span
          children={description}
          color={colors.darkestGray}
          mt={8}
          numberOfLines={12}
          type="main18"
        />
      </Flex>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'visible',
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 10,
    backgroundColor: colors.white,
    borderRadius: 16,
    shadowColor: colors.black,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,
    elevation: 7,
  },
  notSelected: {
    transform: [{ scale: 0.95 }],
    zIndex: 0,
  },
  badge: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.orange,
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 11,
  },
})
