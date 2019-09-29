import styled from "styled-components/native";
export default styled.Text `
  text-align: center;
  font-size: ${(props) => props.theme.typography.base.fontSize};
  font-family: ${(props) => props.theme.typography.base.fontFamily};
  color: ${(props) => props.theme.dark
    ? props.theme.pallete.primary.contrastTextDark
    : props.theme.pallete.primary.contrastText};
`;
//# sourceMappingURL=Base.js.map