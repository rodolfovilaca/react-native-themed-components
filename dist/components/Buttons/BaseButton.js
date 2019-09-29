import styled from "styled-components/native";
// ${(props: any) => props.style}
const Button = styled.TouchableOpacity `
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.button.borderRadius};
  padding-vertical: ${(props) => props.theme.button.padding};
  padding-horizontal: ${(props) => props.theme.button.padding};
`;
export default Button;
//# sourceMappingURL=BaseButton.js.map