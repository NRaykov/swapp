import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';
import '../../setupTests';
import { shallow } from 'enzyme';


describe('<Login /> with no props', () => {
  test("renders", ()=>{
    const container = shallow(<BrowserRouter><Login /></BrowserRouter>);
        expect(container.exists()).toBe(true);
  });

});
