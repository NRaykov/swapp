import styled from 'styled-components/macro';
import { Text } from 'rebass';
import { variant, } from 'styled-system';

import { themed } from '../../../utilities/themed';

const heading = variant({ key: 'heading' });

const Heading = styled(Text)(
        {},
        heading,
        themed('Heading'),
);

Heading.defaultProps = {
  as: 'h2',
};

export default Heading;
