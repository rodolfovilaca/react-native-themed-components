/// <reference types="react" />
declare const _default: {
    Provider: (props: {
        theme: import("styled-components").DefaultTheme;
        children: import("react").ReactComponentElement<any, Pick<any, string | number | symbol>>;
    }) => JSX.Element;
    Context: import("react").Context<import("styled-components").DefaultTheme>;
    Default: {
        dark: boolean;
        borderRadius: number;
        button: {
            padding: number;
            borderRadius: number;
        };
        pallete: {
            primary: {
                light: string;
                main: string;
                dark: string;
                contrastTextDark: string;
                contrastText: string;
            };
            secondary: {
                light: string;
                main: string;
                dark: string;
                contrastTextDark: string;
                contrastText: string;
            };
            error: {
                light: string;
                main: string;
                dark: string;
                contrastTextDark: string;
                contrastText: string;
            };
            text: {
                primary: string;
                secondary: string;
                disabled: string;
                hint: string;
                icon: string;
            };
            divider: string;
            background: {
                card: string;
                light: string;
                dark: string;
            };
            backdrop: string;
            action: {
                active: string;
                hover: string;
                hoverOpacity: number;
                selected: string;
                disabled: string;
                disabledBackground: string;
            };
        };
        typography: {
            base: {
                fontFamily: string;
                fontSize: number;
            };
            mini: {
                fontSize: number;
                lineHeight: number;
            };
            small: {
                fontSize: number;
                lineHeight: number;
            };
            medium: {
                fontSize: number;
                lineHeight: number;
            };
            big: {
                fontSize: number;
                lineHeight: number;
            };
            title: {
                fontSize: number;
                lineHeight: number;
            };
            subtitle1: {
                fontWeight: import("../../types").FontWeight;
                fontSize: number;
                lineHeight: number;
            };
            subtitle2: {
                fontWeight: import("../../types").FontWeight;
                fontSize: number;
                lineHeight: number;
            };
            body1: {
                fontWeight: import("../../types").FontWeight;
                fontSize: number;
                lineHeight: number;
            };
            body2: {
                fontWeight: import("../../types").FontWeight;
                fontSize: number;
                lineHeight: number;
            };
            button: {
                fontWeight: import("../../types").FontWeight;
                fontSize: number;
                lineHeight: number;
                letterSpacing: number;
                textTransform: string;
            };
            caption: {
                fontWeight: import("../../types").FontWeight;
                fontSize: number;
                lineHeight: number;
                letterSpacing: number;
            };
            overline: {
                fontWeight: import("../../types").FontWeight;
                fontSize: number;
                lineHeight: number;
                letterSpacing: number;
                textTransform: string;
            };
        };
        zIndex: {
            mobileStepper: number;
            speedDial: number;
            appBar: number;
            drawer: number;
            modal: number;
            snackbar: number;
            tooltip: number;
        };
    };
};
export default _default;
