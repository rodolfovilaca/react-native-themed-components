import React from 'react';
import { DefaultTheme } from 'styled-components';
declare type Props = {
    theme: DefaultTheme;
    children: React.ReactComponentElement<any>;
};
declare const Provider: (props: Props) => JSX.Element;
export default Provider;
