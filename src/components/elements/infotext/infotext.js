import styled from 'styled-components/macro';
import { Text } from 'rebass';
import { variant, } from 'styled-system';
import { themed } from '../../../utilities/themed';

const info = variant({ key: 'info' });

const Info = styled(Text)(
        {},
        info,
        themed('Info'),
);

Info.defaultProps = {
  as: 'span',
};

export default Info;
