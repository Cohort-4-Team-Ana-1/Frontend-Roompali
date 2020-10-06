import React from 'react';
import { shallow  } from 'enzyme';
import { Step2 } from '../../components/Step2';
import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;


describe('Step2 testing', () => {
    test('should render Step2', () => {
        const wrapper = shallow(<Step2 />);
        expect(wrapper.length).toEqual(1);
    })
})