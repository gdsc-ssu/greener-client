import StorybookWrap from '@/components/common/storybook/StorybookWrap';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import MainTemplate from './MainTemplate';

const GROUP_ID = 'MainTemplate';

storiesOf('templates/main', module)
  .addDecorator((getStory) => <StorybookWrap>{getStory()}</StorybookWrap>)
  .addDecorator(withKnobs)
  .add(GROUP_ID, () => <MainTemplate />);
