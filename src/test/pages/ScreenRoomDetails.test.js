import React from 'react';
import { shallow  } from 'enzyme';
import { ScreenRoomDetails } from '../../pages/ScreenRoomDetails';
import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;


describe('ScreenRoomDetails testing', () => {
    test('should render ScreenRoomDetails', () => {
        const wrapper = shallow(<ScreenRoomDetails />);
        expect(wrapper.length).toEqual(1);
    })
    
})