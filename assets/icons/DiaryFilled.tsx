/* eslint-disable react/jsx-props-no-spreading */

import { COLORS } from '@/constants/styles/colors';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './iconTypes';

export default function DiaryFilled({ color, ...props }: IconProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.523 15.7c.6-.09 1.371-.106 2.43-.11a6.195 6.195 0 0 1-4.31 3.668l-.005.001c.01-.762.037-1.35.112-1.825.097-.62.264-.964.513-1.213.255-.255.61-.425 1.26-.521ZM14.97 3.344a13.006 13.006 0 0 0-5.94 0A7.63 7.63 0 0 0 3.344 9.03a13.006 13.006 0 0 0 0 5.94 7.63 7.63 0 0 0 5.686 5.686 13.006 13.006 0 0 0 5.94 0 7.63 7.63 0 0 0 5.686-5.686 13.006 13.006 0 0 0 0-5.94 7.63 7.63 0 0 0-5.686-5.686ZM8.554 9.128c0-.317.257-.574.574-.574H12a.574.574 0 0 1 0 1.148H9.128a.574.574 0 0 1-.574-.574Zm0 2.872c0-.317.257-.574.574-.574h4.787a.574.574 0 1 1 0 1.148H9.128A.574.574 0 0 1 8.554 12Z"
        fill={color || COLORS.grayscale.black}
      />
    </Svg>
  );
}
