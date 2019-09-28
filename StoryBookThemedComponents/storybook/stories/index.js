import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// eslint-disable-next-line import/extensions
import { Buttons, Theme, Typography, Layout } from 'react-native-themed-components';
import CenterView from './CenterView';
import Welcome from './Welcome';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
storiesOf('Buttons', module)
  .addDecorator(getStory => <Theme.Provider><CenterView>{getStory()}</CenterView></Theme.Provider>)
  .add('Base', () => (
    <Buttons.Base onPress={action('clicked')}>
      <Text>Base Button</Text>
    </Buttons.Base>
  ))
  .add('Primary', () => (
    <Buttons.Primary onPress={action('clicked')}>
      <Typography.ButtonText>Primary Button</Typography.ButtonText>
    </Buttons.Primary>
  ))
  .add('Secondary', () => (
    <Buttons.Secondary onPress={action('clicked')}>
      <Typography.ButtonText>Secondary Button</Typography.ButtonText>
    </Buttons.Secondary>
  ))
  .add('OutlinePrimary', () => (
    <Buttons.OutlinePrimary onPress={action('clicked')}>
      <Typography.PrimaryText>Outline Primary</Typography.PrimaryText>
    </Buttons.OutlinePrimary>
  ))
  .add('OutlineSecondary', () => (
    <Buttons.OutlineSecondary onPress={action('clicked')}>
      <Typography.SecondaryText>Outline Secondary</Typography.SecondaryText>
    </Buttons.OutlineSecondary>
  ))
storiesOf('Layout', module)
  .addDecorator(getStory => <Theme.Provider>{getStory()}</Theme.Provider>)
  .add('Row', () => (
    <Layout.Row>
      <Text>😀</Text>
      <Text>😎</Text>
      <Text>👍</Text>
      <Text>💯</Text>
    </Layout.Row>
  ))
  .add('Column', () => (
    <Layout.Column>
      <Text>😀</Text>
      <Text>😎</Text>
      <Text>👍</Text>
      <Text>💯</Text>
    </Layout.Column>
  ))
  .add('BackgroundRow', () => (
    <Layout.BackgroundRow>
      <Text>😀</Text>
      <Text>😎</Text>
      <Text>👍</Text>
      <Text>💯</Text>
    </Layout.BackgroundRow>
  ))
  .add('BackgroundColumn', () => (
    <Layout.BackgroundColumn>
      <Text>😀</Text>
      <Text>😎</Text>
      <Text>👍</Text>
      <Text>💯</Text>
    </Layout.BackgroundColumn>
  ));
