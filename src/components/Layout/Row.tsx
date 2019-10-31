import styled from 'styled-components/native';

export default styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${(props: any) => props.style}
`;
