import styled from 'styled-components/native';
import BaseText from './Base';
// font-family: ${(props: IProps) => props.theme.typography.button.fontFamily};
// line-height: ${(props: IProps) => props.theme.typography.button.lineHeight};
// font-weight: bold;
const Text = styled(BaseText) `
  text-transform: ${(props) => props.theme.typography.button.textTransform};
  font-weight: ${(props) => props.theme.typography.button.fontWeight};
  color: ${(props) => props.theme.dark ? props.theme.pallete.primary.dark : props.theme.pallete.primary.light};
`;
export default Text;
//# sourceMappingURL=PrimaryText.js.map