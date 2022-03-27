import StorybookWrap from '@/components/common/storybook/StorybookWrap';
import { action } from '@storybook/addon-actions';
import { number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import BottomTab from './BottomTab';

const GROUP_ID = 'BottomTab';

storiesOf('components/common/molecules', module)
  .addDecorator((getStory) => <StorybookWrap>{getStory()}</StorybookWrap>)
  .addDecorator(withKnobs)
  .add(GROUP_ID, () => (
    <BottomTab
      routes={[
        { name: 'Main', onPress: action('onPressMain') },
        { name: 'Map', onPress: action('onPressMap') },
        { name: 'Diary', onPress: action('onPressDiary') },
      ]}
      focusedIndex={number('focusedIndex', 0, undefined, GROUP_ID)}
    />
  ));
