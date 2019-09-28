import { DefaultTheme } from "styled-components";

export type IProps = {
  theme: DefaultTheme;
};

export enum FontWeight {
  normal = "normal",
  bold = "bold",
  f100 = "100",
  f200 = "200",
  f300 = "300",
  f400 = "400",
  f500 = "500",
  f600 = "600",
  f700 = "700",
  f800 = "800",
  f900 = "900"
}


export type FontType = {
  fontFamily: string;
  fontWeight: FontWeight;
  fontSize: string;
  lineHeight: number;
  letterSpacing: string;
};

export type ColorType = {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
  contrastTextDark: string;
};