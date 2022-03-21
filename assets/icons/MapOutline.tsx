/* eslint-disable react/jsx-props-no-spreading */

import { COLORS } from '@/constants/styles/colors';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './iconTypes';

export default function MapOutline({ color, ...props }: IconProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M20 11.175C20 15.691 16.418 21 12 21s-8-5.31-8-9.825S7.582 3 12 3s8 3.66 8 8.175Z"
        stroke={color || COLORS.grayscale.black}
        strokeWidth={1.5}
      />
      <Path
        d="M9.5 10.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z"
        stroke={color || COLORS.grayscale.black}
        strokeWidth={1.5}
      />
    </Svg>
  );
}
