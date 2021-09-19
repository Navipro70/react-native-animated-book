import React from 'react'
import { TextInput } from 'react-native'
import Animated, { useAnimatedProps } from 'react-native-reanimated'

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)

Animated.addWhitelistedNativeProps({ text: true })

interface Props {
  text: Readonly<Animated.SharedValue<string>>
  style?: object
}

export const AnimatedText = ({ style, text }: Props) => {
  const animatedText = useAnimatedProps(() => ({
    text: text.value,
  }))

  return (
    <AnimatedTextInput
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      animatedProps={animatedText}
      editable={false}
      style={style}
      underlineColorAndroid="transparent"
      value={text.value}
    />
  )
}
