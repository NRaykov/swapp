import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../../setupTests';
import { shallow } from 'enzyme';
import Episode from './Episode';

describe('<Episode /> with no props', () => {
  test("renders", ()=>{
    const container = shallow(
            <BrowserRouter>
              <Episode />
            </BrowserRouter>);
        expect(container.exists()).toBe(true);
  });

});
