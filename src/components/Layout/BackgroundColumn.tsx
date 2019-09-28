import styled from "styled-components/native";
import { IProps } from "../../types";
import Column from "./Column";

export default styled(Column)`
  background-color: ${(props: IProps) =>
    props.theme.dark
      ? props.theme.pallete.background.dark
      : props.theme.pallete.background.light};
`;
