import React from 'react';
import { shallow  } from 'enzyme';
import { LoginScreen } from '../../pages/LoginScreen';
import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;


describe('ScreenHome testing', () => {
    test('should render ScreenHome', () => {
        const wrapper = shallow(<LoginScreen />);
        expect(wrapper.length).toEqual(1);
    })
})