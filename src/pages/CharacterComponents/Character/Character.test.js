import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Character from './Character';
import '../../../setupTests';
import { shallow } from 'enzyme';

describe('<Character /> with no props', () => {
  test("renders", ()=>{
    const container = shallow(<BrowserRouter><Character /></BrowserRouter>);

        expect(container.exists()).toBe(true);
  });

});
