import styled from "styled-components/native";
import Column from "./Column";
export default styled(Column) `
  background-color: ${(props) => props.theme.dark
    ? props.theme.pallete.background.dark
    : props.theme.pallete.background.light};
`;
//# sourceMappingURL=BackgroundColumn.js.map