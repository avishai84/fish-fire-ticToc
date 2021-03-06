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
    expect(wrapper.state().whosNext).to.equal(true);
    });

    it('should have whosNext prop on Square' , function() {
        const wrapper = shallow(<Board></Board>);
        expect(wrapper.find('Square').props().whosNext).to.equal(true);
    });

    it('will test whosNext state to be true' , function() {
        const wrapper = shallow(<Board></Board>);
        //console.log(wrapper.state());
        expect(wrapper.state('whosNext')).to.equal(true);
    });

    it('will test if whosNext state change from true to false on click' , function() {
        const wrapper = shallow(<Board></Board>);
        wrapper.find('Square').simulate('click');
        expect(wrapper.state('whosNext')).to.equal(false);
    });