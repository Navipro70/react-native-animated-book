import React, { useState } from 'react'
import { View } from 'react-native'
import Animated, { FadeInUp } from 'react-native-reanimated'

import { Flex, PressableMenu, Span } from '~/components'

export const EnteringAnimationsScreen = () => {
  const [visible, setVisible] = useState(true)
  return (
    <Flex center pb={100}>
      <Flex center>
        {visible && (
          <Animated.View entering={FadeInUp.withCallback((f) => console.log('isFinished:', f))}>
            <View style={{ height: 100, width: 100, backgroundColor: 'red' }}>
              <Span children="Hello" />
            </View>
          </Animated.View>
        )}
      </Flex>
      <PressableMenu title="Hello" onPress={() => setVisible((v) => !v)} />
    </Flex>
  )
}
