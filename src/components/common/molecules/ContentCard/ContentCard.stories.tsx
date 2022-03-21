import StorybookWrap from '@/components/common/storybook/StorybookWrap';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import ContentCard from './ContentCard';

const GROUP_ID = 'ContentCard';

storiesOf('components/common/molecules', module)
  .addDecorator((getStory) => <StorybookWrap>{getStory()}</StorybookWrap>)
  .addDecorator(withKnobs)
  .add(GROUP_ID, () => (
    <ContentCard
      title={text('title', 'How to find own hobby', GROUP_ID)}
      coverImage="https://images.unsplash.com/photo-1647652524612-f7acedbf730e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2564&q=80"
    />
  ));
