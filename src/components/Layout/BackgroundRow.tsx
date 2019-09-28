import styled from "styled-components/native";
import { IProps } from "../../types";
import Row from "./Row";

export default styled(Row)`
  background-color: ${(props: IProps) =>
    props.theme.dark
      ? props.theme.pallete.background.dark
      : props.theme.pallete.background.light};
`;
