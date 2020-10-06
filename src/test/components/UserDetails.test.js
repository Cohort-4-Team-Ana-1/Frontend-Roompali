import React from 'react';
import { shallow  } from 'enzyme';
import { UserDetails } from '../../components/UserDetails';
import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;


describe('UserDetails testing', () => {
    test('should render UserDetails', () => {
        const wrapper = shallow(<UserDetails />);
        expect(wrapper.length).toEqual(1);
    })
})