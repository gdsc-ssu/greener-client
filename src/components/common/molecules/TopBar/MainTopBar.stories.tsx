/* eslint-disable react-native/no-inline-styles */

import StorybookWrap from '@/components/common/storybook/StorybookWrap';
import { COLORS } from '@/constants/styles/colors';
import styled from '@emotion/native';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React, { useRef } from 'react';
import { Animated } from 'react-native';
import MainTopBar from './MainTopBar';

const GROUP_ID = 'MainTopBar';

const SCROLL_RANGE = 116;

const TopBarWrap = styled.View({
  position: 'absolute',
  top: 0,
  zIndex: 10,
  width: '100%',
});

const SampleBox = styled.View({
  width: '100%',
  height: 100,
  backgroundColor: COLORS.grayscale.gray2,
});

function MainTopBarStory() {
  const scroll = useRef(new Animated.Value(0)).current;

  return (
    <>
      <TopBarWrap>
        <MainTopBar scroll={scroll} scrollRange={SCROLL_RANGE} />
      </TopBarWrap>
      <Animated.ScrollView
        style={{ flex: 1 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scroll } } }],
          { useNativeDriver: true },
        )}
        showsVerticalScrollIndicator={false}
      >
        <SampleBox />
        <SampleBox />
        <SampleBox />
        <SampleBox />
        <SampleBox />
        <SampleBox />
        <SampleBox />
        <SampleBox />
        <SampleBox />
        <SampleBox />
      </Animated.ScrollView>
    </>
  );
}

storiesOf('components/common/molecules', module)
  .addDecorator((getStory) => <StorybookWrap>{getStory()}</StorybookWrap>)
  .addDecorator(withKnobs)
  .add(GROUP_ID, () => <MainTopBarStory />);
