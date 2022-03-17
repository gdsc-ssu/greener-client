import StorybookWrap from '@/components/common/storybook/StorybookWrap';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import TextBox from './TextBox';

const GROUP_ID = 'TextBox';

storiesOf('components|atoms', module)
  .addDecorator((getStory) => <StorybookWrap>{getStory()}</StorybookWrap>)
  .addDecorator(withKnobs)
  .add(GROUP_ID, () => (
    <TextBox text={text('text', 'Sample Text', GROUP_ID)} />
  ));
