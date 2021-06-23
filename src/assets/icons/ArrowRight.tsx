import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

export const ArrowRight = (props: SvgProps) => {
  return (
    <Svg color="#969696" fill="none" height={24} viewBox="0 0 24 24" width={24} {...props}>
      <Path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.25}
      />
    </Svg>
  )
}
