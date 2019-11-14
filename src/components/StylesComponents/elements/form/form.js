import styled from 'styled-components/macro';
import { Text } from 'rebass';
import { variant, } from 'styled-system';

import { themed } from '../../../../utilities/themed';

const form = variant({ key: 'form' });

const Form = styled(Text)(
        {},
        form,
        themed('Form'),
);

Form.defaultProps = {
  as: 'form',
};

export default Form;
