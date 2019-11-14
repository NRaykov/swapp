import styled from 'styled-components/macro';
import { Text } from 'rebass';
import { variant, } from 'styled-system';
import { themed } from '../../../../utilities/themed';

const separator = variant({ key: 'separator' });

const Separator = styled(Text)(
        {},
        separator,
        themed('Separator'),
);

Separator.defaultProps = {
  as: 'div',
};

export default Separator;
