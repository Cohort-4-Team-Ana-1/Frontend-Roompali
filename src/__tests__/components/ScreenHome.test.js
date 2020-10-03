
import React from 'react';
import { mount } from 'enzyme';
import { ScreenHome } from '../../pages/ScreenHome';


describe('ScreenHome testing', () => {
    test('should render ScreenHome', () => {
        const wrapper = mount(<ScreenHome />);
        expect(wrapper.length).toEqual(1);
    })
    
})



