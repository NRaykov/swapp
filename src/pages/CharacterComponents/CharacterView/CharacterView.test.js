import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CharacterView from './CharacterView';
import '../../../setupTests';
import { shallow } from 'enzyme';

describe('<CharacterView /> with no props', () => {
  test("renders", ()=>{
    const container = shallow(
            <BrowserRouter>
              <CharacterView />
            </BrowserRouter>);
        expect(container.exists()).toBe(true);
  });

});
