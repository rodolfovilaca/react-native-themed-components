import styled from "styled-components/native";
import BaseButton from './BaseButton';
const Primary = styled(BaseButton) `
  background-color: ${(props) => props.theme.dark
    ? props.theme.pallete.primary.dark
    : props.theme.pallete.primary.light};
`;
export default Primary;
//# sourceMappingURL=PrimaryButton.js.map