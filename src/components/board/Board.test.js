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
    const wrapper = shallow(<Board/>);
    expect(wrapper.find('Square').props().square.length).to.equal(9);
  });
});


it('will get array length equals to nine ', function() {
    const wrapper = shallow(<Board />);
    expect(wrapper.state('squares').length).to.equal(9);
  });

  it('should have whosNext prop' , function() {
    const wrapper = shallow(<Board></Board>);
    console.log(wrapper.debug());
    expect(wrapper.find('Board').props().whosNext).length.to.equal(1);
    });

