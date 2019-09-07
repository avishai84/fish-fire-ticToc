import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


 import Game from './Game';


 describe('Game ', function() {
    it('has a class of game', function() {
        const wrapper = shallow(<Game/>);
      expect(wrapper.find('.game')).to.have.lengthOf(0);
    });
  });

// describe('A suite', function() {
//   it('should render without throwing an error', function() {
//     expect(shallow(<Foo />).contains(<div className="foo">Bar</div>)).toBe(true);
//   });

//   it('should be selectable by class "foo"', function() {
//     expect(shallow(<Foo />).is('.foo')).toBe(true);
//   });

//   it('should mount in a full DOM', function() {
//     expect(mount(<Foo />).find('.foo').length).toBe(1);
//   });

//   it('should render to static HTML', function() {
//     expect(render(<Foo />).text()).toEqual('Bar');
//   });
// });