import styled from 'styled-components/macro';
import { Text } from 'rebass';
import { variant, } from 'styled-system';

import { themed } from '../../../../utilities/themed';

const container = variant({ key: 'container' });

const Container = styled(Text)(
        {},
        container,
        themed('Container'),
);

Container.defaultProps = {
  as: 'div',
};

export default Container;
