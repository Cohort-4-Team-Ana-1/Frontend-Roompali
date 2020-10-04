
import React from 'react';
import { shallow  } from 'enzyme';
import { ScreenChooseRol } from '../../pages/ScreenChooseRol';
import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;


describe('ScreenChooseRol testing', () => {
    test('should render ScreenChooseRol', () => {
        const wrapper = shallow(<ScreenChooseRol />);
        expect(wrapper.length).toEqual(1);
    })
    
})