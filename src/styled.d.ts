import "styled-components";
import { FontWeight, FontType, ColorType } from "./types";

declare module "styled-components" {
  export interface DefaultTheme {
    dark: boolean;
    borderRadius: number;
    button: {
      padding: number;
      borderRadius: number;
    };
    pallete: {
      primary: ColorType;
      secondary: ColorType;
      error: ColorType;
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
      base: FontType;
      mini: FontType;
      small: FontType;
      medium: FontType;
      big: FontType;
      h5: FontType;
      h6: FontType;
      subtitle1: FontType;
      subtitle2: FontType;
      body1: FontType;
      body2: FontType;
      button: {
        fontFamily: string;
        fontWeight: FontWeight;
        fontSize: string;
        lineHeight: number;
        letterSpacing: string;
        textTransform: string;
      };
      caption: FontType;
      overline: {
        fontFamily: string;
        fontWeight: FontWeight;
        fontSize: string;
        lineHeight: number;
        letterSpacing: string;
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
  }
}
