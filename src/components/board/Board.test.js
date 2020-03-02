import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import Board from './Board';

configure({ adapter: new Adapter() });



describe('Board ', function() {
    xit('has a class of square', function() {
        const wrapper = shallow(<Board/>);
      expect(wrapper.find('.board')).to.have.lengthOf(1);
    });
  });


describe('Borad recieve props square', function() {
  xit('will check if prop squares exists', function() {
    const wrapper = shallow(<Board/>);
    expect(wrapper.find('Square').props().square.length).to.equal(9);
  });
});


xit('will get array length equals to nine ', function() {
    const wrapper = shallow(<Board />);
    expect(wrapper.state('squares').length).to.equal(9);
  });

  xit('should have whosNext prop' , function() {
    const wrapper = shallow(<Board></Board>);
    expect(wrapper.state().whosNext).to.equal(true);
    });

    xit('should have whosNext prop on Square' , function() {
        const wrapper = shallow(<Board></Board>);
        expect(wrapper.find('Square').props().whosNext).to.equal(true);
    });

    xit('will test whosNext state to be true' , function() {
        const wrapper = shallow(<Board></Board>);
        //console.log(wrapper.state());
        expect(wrapper.state('whosNext')).to.equal(true);
    });

    xit('will test if whosNext state change from true to false on click' , function() {
        const wrapper = shallow(<Board></Board>);
        wrapper.find('Square').simulate('click');
        expect(wrapper.state('whosNext')).to.equal(false);
    });