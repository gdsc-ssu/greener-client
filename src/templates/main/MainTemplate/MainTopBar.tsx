/* eslint-disable react-native/no-inline-styles */

import Logo from '@/assets/icons/Logo';
import TopBar from '@/components/common/molecules/TopBar';
import { Animated } from 'react-native';

interface MainTopBarProps {
  scroll: Animated.Value;
  scrollRange: number;
}

function AnimatedLogo({ scroll, scrollRange }: MainTopBarProps) {
  const size = scroll.interpolate({
    inputRange: [0, scrollRange],
    outputRange: [60 / 32, 1],
    extrapolate: 'clamp',
  });

  const translateX = scroll.interpolate({
    inputRange: [0, scrollRange],
    outputRange: [14 * (32 / 60), 0],
    extrapolate: 'clamp',
  });

  const translateY = scroll.interpolate({
    inputRange: [0, scrollRange],
    outputRange: [58 * (32 / 60), 0],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={{
        width: 32,
        height: 32,
        transform: [{ scale: size }, { translateX }, { translateY }],
      }}
    >
      <Logo style={{ width: '100%', height: '100%' }} />
    </Animated.View>
  );
}

export default function MainTopBar({ scroll, scrollRange }: MainTopBarProps) {
  return (
    <TopBar
      titleComponent={
        <AnimatedLogo scroll={scroll} scrollRange={scrollRange} />
      }
    />
  );
}
