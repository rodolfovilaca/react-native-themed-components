import styled from "styled-components/native";
import BaseText from './Base';
// font-family: ${(props: IProps) => props.theme.typography.button.fontFamily};
// line-height: ${(props: IProps) => props.theme.typography.button.lineHeight};
// font-weight: bold;
const Text = styled(BaseText) `
  text-transform: ${(props) => props.theme.typography.button.textTransform};
  font-weight: ${(props) => props.theme.typography.button.fontWeight};
`;
export default Text;
//# sourceMappingURL=ButtonText.js.map