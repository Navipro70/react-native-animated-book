import React from 'react'
import { StyleSheet } from 'react-native'

import { Icons } from '~/assets'
import { Flex, SwitchIconButton, Row, Box, Span, ScalePress, ShadowPress } from '~/components'
import { colors } from '~/theme'

//Можно вынести в отдельный компонент с настройкой для любой иконки
export const AnimatedButtonsScreen = () => {
  return (
    <Flex bg={colors.white} p={16}>
      <Row justifyContent="space-evenly">
        <SwitchIconButton
          initialPressed
          activeIcon={<Icons.Secure color={colors.orange} fill={colors.orange} />}
          inactiveIcon={<Icons.Secure color={colors.orange} />}
        />
        <SwitchIconButton
          initialPressed
          activeIcon={<Icons.Secure color={colors.orange} fill={colors.orange} />}
          inactiveIcon={<Icons.Secure color={colors.orange} />}
        />
        <SwitchIconButton
          initialPressed
          activeIcon={<Icons.Secure color={colors.orange} fill={colors.orange} />}
          inactiveIcon={<Icons.Secure color={colors.orange} />}
        />
        <SwitchIconButton
          initialPressed
          activeIcon={<Icons.Secure color={colors.orange} fill={colors.orange} />}
          inactiveIcon={<Icons.Secure color={colors.orange} />}
        />
      </Row>
      <ScalePress>
        <Box center bg={colors.orange} borderRadius={8} p={8}>
          <Span children="Animtion" color={colors.white} type="bold" />
        </Box>
      </ScalePress>
      <ScalePress my={16} scaleOut={0.9}>
        <Box center bg={colors.white} py={40} style={styles.boxShadow}>
          <Span children="I'm pressable card!" />
        </Box>
      </ScalePress>
      <ShadowPress>
        <Box center bg={colors.white} py={16}>
          <Span children="I'm pressable card!" />
        </Box>
      </ShadowPress>
    </Flex>
  )
}

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
})
