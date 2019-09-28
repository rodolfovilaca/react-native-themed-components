import styled from "styled-components/native";
import { IProps } from "../../types";
import BaseButton from "./BaseButton";

const OutlinePrimary = styled(BaseButton)`
  border-width: 1;
  border-color: ${(props: IProps) =>
    props.theme.dark
      ? props.theme.pallete.primary.dark
      : props.theme.pallete.primary.light};
`;

export default OutlinePrimary;
