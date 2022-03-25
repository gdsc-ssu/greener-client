/* eslint-disable react/jsx-props-no-spreading */

import { COLORS } from '@/constants/styles/colors';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './iconTypes';

export default function Arrow({ color, ...props }: IconProps) {
  return (
    <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        d="m16 20-8-8 8-8"
        stroke={color || COLORS.grayscale.black}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
