import React from 'react';
import { shallow  } from 'enzyme';
import {ScreenFavorites } from '../../pages/ScreenFavorites';
import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;


describe('ScreenFavorites testing', () => {
    test('should render ScreenFavorites', () => {
        const wrapper = shallow(<ScreenFavorites />);
        expect(wrapper.length).toEqual(1);
    })
    
})