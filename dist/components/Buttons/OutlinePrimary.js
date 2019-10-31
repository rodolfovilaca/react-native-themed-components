import styled from 'styled-components/native';
import BaseButton from './BaseButton';
const OutlinePrimary = styled(BaseButton) `
  border-width: 1;
  border-color: ${(props) => props.theme.dark ? props.theme.pallete.primary.dark : props.theme.pallete.primary.light};
`;
export default OutlinePrimary;
//# sourceMappingURL=OutlinePrimary.js.map