/* eslint-disable react/jsx-props-no-spreading */

import { COLORS } from '@/constants/styles/colors';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './iconTypes';

export default function HomeFilled({ color, ...props }: IconProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M20.797 11.782a.7.7 0 0 0 0-.985l-5.73-5.769c-.587-.59-1.076-1.082-1.516-1.42C13.086 3.25 12.595 3 12 3s-1.086.25-1.55.607c-.441.339-.93.83-1.516 1.421l-5.731 5.769a.7.7 0 0 0 0 .985.69.69 0 0 0 .979 0l.396-.4v3.051c0 2.994 2.048 5.595 4.944 6.278 1.63.385 3.326.385 4.956 0 2.896-.683 4.944-3.284 4.944-6.278v-3.05l.396.4a.69.69 0 0 0 .98 0Z"
        fill={color || COLORS.grayscale.black}
      />
    </Svg>
  );
}
