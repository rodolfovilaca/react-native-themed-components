import styled from 'styled-components/native';
// import { IProps } from "../../types";

const Group = styled.View`
  flex-direction: row;
  justify-content: space-beetwen;
  align-items: center;
  padding: 10;
  ${(props: any) => props.style}
`;

export default Group;
