import styled from 'styled-components/macro';
import { Text } from 'rebass';
import { variant, } from 'styled-system';
import { themed } from '../../../utilities/themed';

const button = variant({ key: 'button' });

const Button = styled(Text)(
        {},
        button,
        themed('Button'),
);

Button.defaultProps = {
  as: 'button',
};

export default Button;
