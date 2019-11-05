import styled from 'styled-components/macro';
import { Text } from 'rebass';
import { variant, } from 'styled-system';

import { themed } from '../../../utilities/themed';

const card = variant({ key: 'card' });

const Card = styled(Text)(
        {},
        card,
        themed('Card'),
);

Card.defaultProps = {
  as: 'div',
};

export default Card;
