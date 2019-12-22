import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import Square from './Square';


describe('Square ', function() {
  it('has a class of square', function() {
      const wrapper = shallow(<Square/>);
    expect(wrapper.find('.square')).to.have.lengthOf(1);
  });
});

describe('button ', function() {
  it('should have a button element' , function() {
    const wrapper = shallow(<Square></Square>);
    expect(wrapper.find('.square').find('button')).to.have.lengthOf(9);
  });
});


describe('button element has ID', function() {
    it('should have a total of nine IDs' , function() {
      const wrapper = shallow(<Square></Square>);
        expect(wrapper.find('button')).to.have.lengthOf(9);
    });
  });


describe('button element has ID', function() {
    it('should have each an ID' , function() {
      const wrapper = shallow(<Square></Square>);
      const btns = wrapper.find('button').length;
      wrapper.find('button').forEach((node, index) => {
          expect(node.find(`#btn_${index}`)).to.have.lengthOf(1);
      });
    });
  });


  describe('check if square has onClick properties', function() {
    it('should have onClick prop' ,function() {
      const wrapper = shallow(<Square className="square" onClick></Square>);
      expect('onClick' in wrapper.props()).to.equal(true);
    });
  });

  const mockFunction = function(){
      var value = 'I was clicked';
      return valueFromClick = value;
  }

  let valueFromClick = '';
  describe('simulate onClick ', function() {
    it('should call mock function when button is clicked' ,function() {
      const wrapper = shallow(<Square className="square" onClick={mockFunction}></Square>);
      wrapper.simulate('click');
      expect(valueFromClick).to.equal('I was clicked');
    });
  });
