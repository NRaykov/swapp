import styled from 'styled-components/macro';
import { Text } from 'rebass';
import { variant, } from 'styled-system';

import { themed } from '../../../../utilities/themed';

const subheading = variant({ key: 'subheading' });

const Subheading = styled(Text)(
        {},
        subheading,
        themed('Heading'),
);

Subheading.defaultProps = {
  as: 'h2',
};

export default Subheading;
