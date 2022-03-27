import StorybookWrap from '@/components/common/storybook/StorybookWrap';
import { DiaryEmotion, EMOTION_COLOR } from '@/constants/types/dataTypes';
import { action } from '@storybook/addon-actions';
import { number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import DiaryCalendar from './DiaryCalendar';

const GROUP_ID = 'DiaryCalendar';

const diaryEmotionList: Array<DiaryEmotion | undefined> = [...Array(31)].map(
  (value, index) =>
    index < 15
      ? {
          id: index,
          emotionColor: EMOTION_COLOR.GREEN,
          createdAt: new Date(),
        }
      : undefined,
);

storiesOf('components/diary/organisms', module)
  .addDecorator((getStory) => <StorybookWrap>{getStory()}</StorybookWrap>)
  .addDecorator(withKnobs)
  .add(GROUP_ID, () => (
    <DiaryCalendar
      year={number('year', 2022, undefined, GROUP_ID)}
      month={number('month', 2, undefined, GROUP_ID)}
      diaryEmotionList={diaryEmotionList}
      selected={number('selected', 4, undefined, GROUP_ID)}
      onPressDate={action('onPressDate')}
      onPressNext={action('onPressNext')}
      onPressPrev={action('onPressPrev')}
    />
  ));
