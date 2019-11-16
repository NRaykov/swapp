import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import '../../setupTests';
import { shallow } from 'enzyme';

describe('<Home /> with no props', () => {
  test("renders", ()=>{
    const container = shallow(
            <BrowserRouter>
              <Home />
            </BrowserRouter>);
        expect(container.exists()).toBe(true);
  });

});
