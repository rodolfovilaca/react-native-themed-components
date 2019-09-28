import React from 'react';
import {
  makeDecorator,
  // StoryContext,
  // StoryGetter,
} from '@storybook/addons';
import { Theme } from 'react-native-themed-components';
// import { getCurrentTheme } from './ThemeSwitcher';

export const withThemes = makeDecorator({
  name: 'themes',
  parameterName: 'themes',
  skipIfNoParametersOrOptions: false,
  allowDeprecatedUsage: false,
  wrapper: (getStory, context) => {
    // const theme = getCurrentTheme();
    return (
      <Theme.Provider theme={{}}>{getStory(context)}</Theme.Provider>
    );
  },
});

// export { addThemes } from './ThemeSwitcher';