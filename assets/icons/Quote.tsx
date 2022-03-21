/* eslint-disable react/jsx-props-no-spreading */

import { COLORS } from '@/constants/styles/colors';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './iconTypes';

export default function SvgComponent({ color, ...props }: IconProps) {
  return (
    <Svg width={17} height={17} fill="none" {...props}>
      <Path
        d="M3.76 15.168c1.656 0 2.844-1.152 2.844-3.024 0-1.692-1.296-2.736-2.844-2.736-.792 0-1.476.36-2.088.828l1.944 2.592-.252-3.312c0-2.412 1.152-3.96 3.528-5.184L5.668 1.956C2.032 3.828.232 6.6.232 10.272c0 3.132 1.224 4.896 3.528 4.896Zm8.964 0c1.692 0 2.88-1.152 2.88-3.024 0-1.692-1.332-2.736-2.88-2.736-.756 0-1.44.36-2.052.828l1.908 2.592-.216-3.312c0-2.412 1.152-3.96 3.492-5.184l-1.188-2.376C11.032 3.828 9.232 6.6 9.232 10.272c0 3.132 1.224 4.896 3.492 4.896Z"
        fill={color || COLORS.grayscale.black}
      />
    </Svg>
  );
}
