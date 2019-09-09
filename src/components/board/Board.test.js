import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import Board from './Board';

configure({ adapter: new Adapter() });



describe('Board ', function() {
    it('has a class of square', function() {
        const wrapper = shallow(<Board/>);
      expect(wrapper.find('.board')).to.have.lengthOf(1);
    });
  });


describe('Borad recieve props square', function() {
  it('will check if prop squares exists', function() {
    const wrapper = shallow(<Board square={'square'}/>);
    console.log(wrapper.find('Square').props());
    expect(wrapper.find('Square').props().square).to.equal('square');
    //expect(wrapper.props().square).to.equal('square');
  });
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
// 