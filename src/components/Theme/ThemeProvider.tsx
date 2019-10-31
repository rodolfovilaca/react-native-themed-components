import React from 'react';
import {ThemeProvider, DefaultTheme} from 'styled-components';
import defaultTheme from './DefaultTheme';
import merge from 'lodash/merge';

type Props = {
  theme: DefaultTheme;
  children: React.ReactComponentElement<any>;
};

const Provider = (props: Props) => {
  const mergedTheme = merge(defaultTheme, props.theme);
  return (
    <ThemeProvider {...props} theme={mergedTheme}>
      {props.children}
    </ThemeProvider>
  );
};

export default Provider;
