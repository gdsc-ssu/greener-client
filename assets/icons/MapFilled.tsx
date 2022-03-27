/* eslint-disable react/jsx-props-no-spreading */

import { COLORS } from '@/constants/styles/colors';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './iconTypes';

export default function MapFilled({ color, ...props }: IconProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3c-4.432 0-8 3.703-8 8.239 0 2.252.878 4.664 2.283 6.518C7.685 19.607 9.694 21 12 21c2.306 0 4.315-1.393 5.716-3.243C19.122 15.903 20 13.491 20 11.239 20 6.703 16.432 3 12 3Zm-2.834 7.615c0-1.58 1.269-2.861 2.834-2.861 1.565 0 2.834 1.281 2.834 2.861 0 1.58-1.269 2.862-2.834 2.862-1.565 0-2.834-1.281-2.834-2.862ZM12 8.862c-.96 0-1.737.785-1.737 1.753 0 .969.778 1.754 1.737 1.754.96 0 1.737-.785 1.737-1.754 0-.968-.778-1.753-1.737-1.753Z"
        fill={color || COLORS.grayscale.black}
      />
    </Svg>
  );
}
