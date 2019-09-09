import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Board from './Board';


describe('Board ', function() {
    it('has a class of square', function() {
        const wrapper = shallow(<Board/>);
      expect(wrapper.find('.board')).to.have.lengthOf(1);
    });
  });


describe('Borad recieve props square', function() {
  it('will check for props squares', function() {
    const wrapper = shallow(<Board/>);
    expect(wrapper.props().square.length).to.equal(1);
  });

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