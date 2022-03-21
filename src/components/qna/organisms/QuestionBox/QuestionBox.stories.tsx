import StorybookWrap from '@/components/common/storybook/StorybookWrap';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import QuestionBox from './QuestionBox';

const GROUP_ID = 'QuestionBox';

storiesOf('components/qna/molecules', module)
  .addDecorator((getStory) => <StorybookWrap>{getStory()}</StorybookWrap>)
  .addDecorator(withKnobs)
  .add(GROUP_ID, () => (
    <QuestionBox
      title={text('title', 'How was your day?', GROUP_ID)}
      onChangeText={action('onChangeText')}
      onPressSend={action('onPressSend')}
    />
  ));
