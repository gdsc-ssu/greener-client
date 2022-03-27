import StorybookWrap from '@/components/common/storybook/StorybookWrap';
import { COLORS } from '@/constants/styles/colors';
import { action } from '@storybook/addon-actions';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import SelectableCircle from './SelectableCircle';

const GROUP_ID = 'SelectableCircle';

storiesOf('components/common/atoms', module)
  .addDecorator((getStory) => <StorybookWrap>{getStory()}</StorybookWrap>)
  .addDecorator(withKnobs)
  .add(GROUP_ID, () => (
    <SelectableCircle
      size={number('size', 24, undefined, GROUP_ID)}
      color={text('color', COLORS.emotion.green.normal, GROUP_ID)}
      pressedColor={text(
        'pressedColor',
        COLORS.emotion.green.pressed,
        GROUP_ID,
      )}
      selected={boolean('selected', false, GROUP_ID)}
      onPress={action('onPress')}
    />
  ));
