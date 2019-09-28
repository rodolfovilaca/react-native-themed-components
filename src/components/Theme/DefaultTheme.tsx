import { percentFont, normalizeFont } from "../../utils";
import { FontWeight } from "../../types";
import { Platform } from "react-native";

export default {
  dark: false,
  borderRadius: 4,
  button: {
    padding: 10,
    borderRadius: 8
  },
  pallete: {
    primary: {
      light: "#7986cb",
      main: "#3f51b5",
      dark: "#303f9f",
      contrastTextDark: "#fff",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff4081",
      main: "#f50057",
      dark: "#c51162",
      contrastTextDark: "#fff",
      contrastText: "#fff"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastTextDark: "#fff",
      contrastText: "#fff"
    },
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      hint: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      card: "#ffffff",
      light: "#ffffff",
      dark: "#000000"
    },
    backdrop: "#00000080",
    action: {
      active: "#fff",
      hover: "rgba(255, 255, 255, 0.1)",
      hoverOpacity: 0.1,
      selected: "rgba(255, 255, 255, 0.2)",
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)"
    }
  },
  typography: {
    base: {
      fontFamily: Platform.OS === "ios" ? "system font" : "Roboto",
      fontSize: normalizeFont(16),
    },
    mini: {
      fontSize: normalizeFont(8),
      lineHeight: 2,
      // letterSpacing: percentFont(-0.01562)
    },
    small: {
      fontSize: normalizeFont(12),
      lineHeight: 2,
      // letterSpacing: percentFont(-0.00833)
    },
    medium: {
      fontSize: normalizeFont(20),
      lineHeight: 2.04,
      // letterSpacing: percentFont(0)
    },
    big: {
      fontSize: normalizeFont(24),
      lineHeight: 2.17,
      // letterSpacing: percentFont(0.00735)
    },
    subtitle1: {
      fontWeight: FontWeight.f400,
      fontSize: percentFont(1),
      lineHeight: 2.75,
      // letterSpacing: percentFont(0.00938)
    },
    subtitle2: {
      fontWeight: FontWeight.f500,
      fontSize: percentFont(0.875),
      lineHeight: 2.57,
      // letterSpacing: percentFont(0.00714)
    },
    body1: {
      fontWeight: FontWeight.f400,
      fontSize: percentFont(1),
      lineHeight: 2.5,
      // letterSpacing: percentFont(0.00938)
    },
    body2: {
      fontWeight: FontWeight.f400,
      fontSize: percentFont(0.875),
      lineHeight: 2.43,
      // letterSpacing: percentFont(0.01071)
    },
    button: {
      fontWeight: FontWeight.f500,
      fontSize: percentFont(2),
      lineHeight: 2.75,
      letterSpacing: percentFont(0.02857),
      textTransform: "uppercase"
    },
    caption: {
      fontWeight: FontWeight.f400,
      fontSize: percentFont(0.75),
      lineHeight: 2.66,
      letterSpacing: percentFont(0.03333)
    },
    overline: {
      fontWeight: FontWeight.f400,
      fontSize: percentFont(0.75),
      lineHeight: 2.66,
      letterSpacing: percentFont(0.08333),
      textTransform: "uppercase"
    }
  },
  zIndex: {
    mobileStepper: 100,
    speedDial: 105,
    appBar: 110,
    drawer: 120,
    modal: 130,
    snackbar: 140,
    tooltip: 150
  }
};
