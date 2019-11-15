import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import EpisodeView from './EpisodeView';
import '../../../setupTests';
import { shallow } from 'enzyme';

describe('<EpisodeView /> with no props', () => {
  test("renders", ()=>{
    const container = shallow(
            <BrowserRouter>
              <EpisodeView />
            </BrowserRouter>);
        expect(container.exists()).toBe(true);
  });

});
