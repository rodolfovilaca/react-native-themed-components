import styled from 'styled-components/native';
import {IProps} from '../../types';

// ${(props: any) => props.style}

const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: ${(props: IProps) => props.theme.button.borderRadius};
  padding-vertical: ${(props: IProps) => props.theme.button.padding};
  padding-horizontal: ${(props: IProps) => props.theme.button.padding};
`;

export default Button;
