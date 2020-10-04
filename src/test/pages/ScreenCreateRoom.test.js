import React from 'react';
import { shallow  } from 'enzyme';
import {ScreenCreateRoom } from '../../pages/ScreenCreateRoom';
import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;


describe('ScreenCreateRoom testing', () => {
    test('should render ScreenCreateRoom', () => {
        const wrapper = shallow(<ScreenCreateRoom />);
        expect(wrapper.length).toEqual(1);
    })
    
})