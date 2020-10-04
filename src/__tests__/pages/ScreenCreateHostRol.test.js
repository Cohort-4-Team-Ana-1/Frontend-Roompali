import React from 'react';
import { shallow  } from 'enzyme';
import { ScreenCreateHostRol } from '../../pages/ScreenCreateHostRol';
import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;


describe('ScreenCreateHostRol testing', () => {
    test('should render ScreenCreateHostRol', () => {
        const wrapper = shallow(<ScreenCreateHostRol />);
        expect(wrapper.length).toEqual(1);
    })
    
})