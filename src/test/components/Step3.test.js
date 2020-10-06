import React from 'react';
import { shallow  } from 'enzyme';
import { Step3 } from '../../components/Step3';
import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;


describe('Step3 testing', () => {
    test('should render Step3', () => {
        const wrapper = shallow(<Step3 />);
        expect(wrapper.length).toEqual(1);
    })
})