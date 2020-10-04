import React from 'react';
import { shallow  } from 'enzyme';
import { CarouselRoomDetails } from '../../components/CarouselRoomDetails';
import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;


describe('CarouselRoomDetails testing', () => {
    test('should render CarouselRoomDetails', () => {
        const wrapper = shallow(<CarouselRoomDetails />);
        expect(wrapper.length).toEqual(1);
    })
})