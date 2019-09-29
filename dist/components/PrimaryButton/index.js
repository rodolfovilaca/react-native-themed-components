import styled from "styled-components/native";
const Button = styled.TouchableOpacity `
  background-color: ${(props) => props.theme.dark
    ? props.theme.pallete.primary.dark
    : props.theme.pallete.primary.light};
  ${(props) => props.style}
`;
export default Button;
//# sourceMappingURL=index.js.map