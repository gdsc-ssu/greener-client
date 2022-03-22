/* eslint-disable react/jsx-props-no-spreading */

import * as React from 'react';
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';

export default function Logo(props: SvgProps) {
  return (
    <Svg data-name="\uB808\uC774\uC5B4 1" viewBox="0 0 1800 1800" {...props}>
      <Defs>
        <LinearGradient
          id="a"
          x1={30.45}
          y1={1132.99}
          x2={1769.55}
          y2={667.01}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0} stopColor="#00bd33" />
          <Stop offset={0.1} stopColor="#02b83c" />
          <Stop offset={0.26} stopColor="#07ac54" />
          <Stop offset={0.47} stopColor="#0f987c" />
          <Stop offset={0.71} stopColor="#1a7cb3" />
          <Stop offset={0.98} stopColor="#2958f9" />
          <Stop offset={1} stopColor="#2a55ff" />
        </LinearGradient>
      </Defs>
      <Circle
        cx={900}
        cy={900}
        r={900}
        style={{
          fill: 'url(#a)',
        }}
      />
    </Svg>
  );
}
