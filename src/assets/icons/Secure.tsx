import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

import { colors } from '~/theme'

interface Props extends SvgProps {
  fill?: string
}

export const Secure = ({ fill, ...props }: Props) => (
  <Svg color={colors.darkGray} fill="none" height={24} viewBox="0 0 24 24" width={24} {...props}>
    <Path
      d="M12 3a12 12 0 008.5 3A12.003 12.003 0 0112 21 12 12 0 013.5 6 12 12 0 0012 3"
      fill={fill}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
    />
  </Svg>
)
