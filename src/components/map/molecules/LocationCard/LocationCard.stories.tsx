import StorybookWrap from '@/components/common/storybook/StorybookWrap';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import LocationCard from './LocationCard';

const GROUP_ID = 'LocationCard';

storiesOf('components/map/molecules', module)
  .addDecorator((getStory) => <StorybookWrap>{getStory()}</StorybookWrap>)
  .addDecorator(withKnobs)
  .add(GROUP_ID, () => (
    <LocationCard
      name={text('location', 'Center Name', GROUP_ID)}
      address={text('address', 'Center Address', GROUP_ID)}
    />
  ));
