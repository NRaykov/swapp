import styled from 'styled-components/macro';
import { Text } from 'rebass';
import { variant } from 'styled-system';

import { themed } from '../../../../utilities/themed';

const inputs = variant({ key: 'inputs' });

const Input = styled(Text)(
        {},
        inputs,
        themed('Input'),
);

Input.defaultProps = {
  as: 'input',
};


export default Input;
