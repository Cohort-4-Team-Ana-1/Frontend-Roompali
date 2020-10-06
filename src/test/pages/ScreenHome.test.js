
import React from 'react';
import { shallow  } from 'enzyme';
import { ScreenHome } from '../../pages/ScreenHome';
import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;


describe('ScreenHome testing', () => {
    test('should render ScreenHome', () => {
        const wrapper = shallow(<ScreenHome />);
        expect(wrapper.length).toEqual(1);
    })
    
})



