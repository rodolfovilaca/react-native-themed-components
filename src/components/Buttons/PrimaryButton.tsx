import styled from "styled-components/native";
import { IProps } from "../../types";
import BaseButton from './BaseButton';

const Primary = styled(BaseButton)`
  background-color: ${(props: IProps) =>
    props.theme.dark
      ? props.theme.pallete.primary.dark
      : props.theme.pallete.primary.light};
`;

export default Primary;
