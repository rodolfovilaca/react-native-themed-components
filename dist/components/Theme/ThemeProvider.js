import React from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "./DefaultTheme";
import merge from "lodash/merge";
const Provider = (props) => {
    const mergedTheme = merge(defaultTheme, props.theme);
    return (React.createElement(ThemeProvider, Object.assign({}, props, { theme: mergedTheme }), props.children));
};
export default Provider;
//# sourceMappingURL=ThemeProvider.js.map