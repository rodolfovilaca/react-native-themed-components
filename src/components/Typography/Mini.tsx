import styled from 'styled-components/native';
import {IProps} from '../../types';
import Base from './Base';

export default styled(Base)`
  font-size: ${(props: IProps) => props.theme.typography.mini.fontSize};
`;
