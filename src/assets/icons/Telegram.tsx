import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

import { colors } from '~/theme'

export const Telegram = (props: SvgProps) => (
  <Svg fill="none" height={100} viewBox="-5 -10 25 25" width={100} {...props}>
    <Path
      clipRule="evenodd"
      d="M10 6a4 4 0 11-8 0 4 4 0 018 0zm1.5 0a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zM7 6a1 1 0 11-2 0 1 1 0 012 0zm1.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
      fill={colors.green}
      fillRule="evenodd"
    />
  </Svg>
)
