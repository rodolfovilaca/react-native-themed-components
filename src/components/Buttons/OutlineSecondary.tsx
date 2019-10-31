import styled from 'styled-components/native';
import {IProps} from '../../types';
import BaseButton from './BaseButton';

const OutlineSecondary = styled(BaseButton)`
  border-width: 1;
  border-color: ${(props: IProps) =>
    props.theme.dark ? props.theme.pallete.secondary.dark : props.theme.pallete.secondary.light};
`;

export default OutlineSecondary;
