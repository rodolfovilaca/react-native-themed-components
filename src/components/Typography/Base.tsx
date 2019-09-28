import styled from "styled-components/native";
import { IProps } from "../../types";

export default styled.Text`
  text-align: center;
  font-size: ${(props: IProps) => props.theme.typography.base.fontSize};
  font-family: ${(props: IProps) => props.theme.typography.base.fontFamily};
  color: ${(props: IProps) =>
    props.theme.dark
      ? props.theme.pallete.primary.contrastTextDark
      : props.theme.pallete.primary.contrastText};
`;
