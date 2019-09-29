import styled from "styled-components/native";
import BaseButton from "./BaseButton";
const OutlineSecondary = styled(BaseButton) `
  border-width: 1;
  border-color: ${(props) => props.theme.dark
    ? props.theme.pallete.secondary.dark
    : props.theme.pallete.secondary.light};
`;
export default OutlineSecondary;
//# sourceMappingURL=OutlineSecondary.js.map