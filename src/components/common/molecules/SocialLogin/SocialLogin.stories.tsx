import StorybookWrap from '@/components/common/storybook/StorybookWrap';
import { action } from '@storybook/addon-actions';
import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import SocialLogin, { SOCIAL_TYPE } from './SocialLogin';

const GROUP_ID = 'SocialLogin';

storiesOf('components/common/molecules', module)
  .addDecorator((getStory) => <StorybookWrap>{getStory()}</StorybookWrap>)
  .addDecorator(withKnobs)
  .add(GROUP_ID, () => (
    <SocialLogin
      socialType={select(
        'socialType',
        SOCIAL_TYPE,
        SOCIAL_TYPE.google,
        GROUP_ID,
      )}
      onPress={action('onPress')}
    />
  ));
