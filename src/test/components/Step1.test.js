import React from 'react';
import { shallow, mount } from 'enzyme';
import { Step1 } from '../../components/Step1';
import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;


describe('Step1 testing', () => {
    test('should render Step1', () => {
        const wrapper = shallow(<Step1 />);
        expect(wrapper.length).toEqual(1);
    })

    test('should create a snapshot', () => {
        const wrapper = mount(
            <Step1 />
        );
        expect( wrapper ).toMatchSnapshot();
    })
    
})