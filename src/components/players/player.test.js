import React from 'react';
import Enzyme, { shallow, mount} from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import Player from './index';
Enzyme.configure({ adapter: new Adapter() });


describe.only('player component exist', () => {
    
    it('render <player /> component', () => {
        const wrapper = mount(<Player/>);
        // console.debug(wrapper);
        expect(wrapper).to.not.equal(null);
    });

    it('will have a class of .playerWrapper', () => {
        const wrapper = mount(<Player className="playerWrapper"/>);
        // console.debug(wrapper);
        expect(wrapper.find('.playerWrapper').exists()).to.equal(true);
        
    });

    it('will check if prop name have a value', () => {
        const wrapper = mount(<Player name='player1' />);
        expect(wrapper.props().name).to.be.equal('player1');
    });
});