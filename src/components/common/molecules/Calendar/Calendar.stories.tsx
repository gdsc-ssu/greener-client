import StorybookWrap from '@/components/common/storybook/StorybookWrap';
import { COLORS } from '@/constants/styles/colors';
import { number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import Calendar from './Calendar';

const GROUP_ID = 'Calendar';

storiesOf('components/common/molecules', module)
  .addDecorator((getStory) => <StorybookWrap>{getStory()}</StorybookWrap>)
  .addDecorator(withKnobs)
  .add(GROUP_ID, () => (
    <Calendar
      year={number('year', 2022, undefined, GROUP_ID)}
      month={number('month', 2, undefined, GROUP_ID)}
      renderDate={(date) => (
        <View
          style={{
            width: 16,
            height: 16,
            borderRadius: 8,
            backgroundColor: COLORS.emotion.green.normal,
          }}
        />
      )}
    />
  ));
