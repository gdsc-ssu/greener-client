/* eslint-disable react/jsx-props-no-spreading */

import { COLORS } from '@/constants/styles/colors';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './iconTypes';

export default function AppleLogo({ color, ...props }: IconProps) {
  return (
    <Svg width={50} height={50} fill="none" viewBox="0 0 50 50" {...props}>
      <Path
        d="M24.99 13.63c1.827 0 4.117-1.273 5.482-2.97 1.235-1.54 2.136-3.689 2.136-5.838 0-.291-.026-.583-.077-.822-2.034.08-4.479 1.406-5.946 3.184-1.158 1.353-2.214 3.475-2.214 5.65 0 .319.052.637.078.743.128.027.334.053.54.053Zm-6.436 32.102c2.497 0 3.604-1.724 6.718-1.724 3.166 0 3.861 1.671 6.641 1.671 2.728 0 4.556-2.6 6.28-5.147 1.93-2.918 2.729-5.783 2.78-5.916-.18-.053-5.405-2.255-5.405-8.437 0-5.359 4.118-7.773 4.35-7.959-2.728-4.032-6.873-4.138-8.005-4.138-3.063 0-5.56 1.91-7.13 1.91-1.699 0-3.938-1.804-6.59-1.804-5.044 0-10.166 4.297-10.166 12.416 0 5.04 1.905 10.373 4.247 13.822 2.008 2.918 3.758 5.306 6.28 5.306Z"
        fill={color || COLORS.grayscale.black}
      />
    </Svg>
  );
}
