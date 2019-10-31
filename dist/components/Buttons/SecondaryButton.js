import styled from 'styled-components/native';
import BaseButton from './BaseButton';
const Secondary = styled(BaseButton) `
  background-color: ${(props) => props.theme.dark ? props.theme.pallete.secondary.dark : props.theme.pallete.secondary.light};
`;
export default Secondary;
//# sourceMappingURL=SecondaryButton.js.map