import StorybookWrap from '@/components/common/storybook/StorybookWrap';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import MultilineInput from './MultilineInput';

const GROUP_ID = 'MultilineInput';

storiesOf('components/common/molecules', module)
  .addDecorator((getStory) => <StorybookWrap>{getStory()}</StorybookWrap>)
  .addDecorator(withKnobs)
  .add(GROUP_ID, () => (
    <MultilineInput
      placeholder={text('placeholder', 'Tell your story', GROUP_ID)}
    />
  ));
