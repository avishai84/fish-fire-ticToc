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
    expect(wrapper.find('.square').find('button').children()).to.have.lengthOf(9);
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
      console.log(btns);
      wrapper.find('button').forEach((node, index) => {
          expect(node.find(`#btn_${index}`)).to.have.lengthOf(1);
      });
    });
  });

//   it('should mount in a full DOM', function() {
//     expect(mount(<Foo />).find('.foo').length).toBe(1);
//   });

//   it('should render to static HTML', function() {
//     expect(render(<Foo />).text()).toEqual('Bar');
//   });
// });