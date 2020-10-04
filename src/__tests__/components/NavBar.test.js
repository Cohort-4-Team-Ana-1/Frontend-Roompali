import React from 'react';
import { shallow  } from 'enzyme';
import { NavBar } from '../../components/NavBar';
import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;


describe('NavBar testing', () => {
    test('should render NavBar', () => {
        const wrapper = shallow(<NavBar />);
        expect(wrapper.length).toEqual(1);
    })
})