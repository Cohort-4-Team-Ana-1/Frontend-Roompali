import React from 'react';
import { shallow  } from 'enzyme';
import { HomeHero } from '../../components/HomeHero';
import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;


describe('HomeHero testing', () => {
    test('should render HomeHero', () => {
        const wrapper = shallow(<HomeHero />);
        expect(wrapper.length).toEqual(1);
    })
})