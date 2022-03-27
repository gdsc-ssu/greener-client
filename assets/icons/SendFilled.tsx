/* eslint-disable react/jsx-props-no-spreading */

import { COLORS } from '@/constants/styles/colors';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './iconTypes';

export default function SendFilled({ color, ...props }: IconProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M9.12 4.384C6.324 2.985 3.223 5.637 4.174 8.612l1.087 3.402-1.08 3.37c-.955 2.974 2.142 5.628 4.937 4.234l8.927-4.452c2.603-1.298 2.606-5.008.005-6.31L9.119 4.383Z"
        fill={color || COLORS.grayscale.black}
      />
    </Svg>
  );
}
