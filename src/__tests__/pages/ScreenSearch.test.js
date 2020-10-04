import React from 'react';
import { shallow  } from 'enzyme';
import {ScreenSearch } from '../../pages/ScreenSearch';
import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;


describe('ScreenSearch testing', () => {
    test('should render ScreenSearch', () => {
        const wrapper = shallow(<ScreenSearch />);
        expect(wrapper.length).toEqual(1);
    })
    
})