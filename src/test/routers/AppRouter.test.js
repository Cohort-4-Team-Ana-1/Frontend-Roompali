import React from 'react';
import { shallow  } from 'enzyme';
import { AppRouter } from '../../routers/AppRouter';
import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;


describe('AppRouter testing', () => {
    test('should render AppRouter', () => {
        const wrapper = shallow(<AppRouter />);
        expect(wrapper.length).toEqual(1);
    })
})