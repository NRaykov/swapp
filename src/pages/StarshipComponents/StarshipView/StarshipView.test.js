import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import StarshipView from './StarshipView';
import '../../../setupTests';
import { shallow } from 'enzyme';

describe('<StarshipView /> with no props', () => {
  test("renders", ()=>{
    const container = shallow(
            <BrowserRouter>
              <StarshipView />
            </BrowserRouter>);
        expect(container.exists()).toBe(true);
  });

});
