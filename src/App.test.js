import React from 'react';
import * as ReactDOM from "react-dom";
const  ReactTestRenderer = require('react-test-renderer');

import { AppComponent }from './App';
import { ApolloProvider } from "react-apollo";
import { client } from './App'

describe('test AppComponent component', () => {

  //Check if the component renders
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });



  // Snapshot test to make sure the UI does not change unexpectedly
  it('Should compare the component with a snapshot', () => {
    const component = ReactTestRenderer.create(
            <ApolloProvider client={client}>
              <AppComponent />
            </ApolloProvider>
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  })

});
