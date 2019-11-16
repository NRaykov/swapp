import React from 'react';
import Episodes from './Episodes'
import { ApolloProvider } from "react-apollo";
import '../../../setupTests';
import { client } from '../../../App'
const ReactTestRenderer = require('react-test-renderer');

describe('Snapshot test "Episodes" component', () => {

  it('Should compare the component with a snapshot', () => {
    const component = ReactTestRenderer.create(
            <ApolloProvider client={client}>
              <Episodes />
            </ApolloProvider>
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  })
});
