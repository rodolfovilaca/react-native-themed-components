import styled from "styled-components/native";
import { IProps } from "../../types";
import BaseText from './Base';
// font-family: ${(props: IProps) => props.theme.typography.button.fontFamily};
// line-height: ${(props: IProps) => props.theme.typography.button.lineHeight};
// font-weight: bold;
const Text = styled(BaseText)`
  text-transform: ${(props: IProps) =>
    props.theme.typography.button.textTransform};
  font-weight: ${(props: IProps) =>
    props.theme.typography.button.fontWeight};
`;

export default Text;
