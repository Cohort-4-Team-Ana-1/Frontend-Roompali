import React from 'react';
import { shallow  } from 'enzyme';
import { RoomListed } from '../../components/RoomListed';
import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;


describe('RoomListed testing', () => {
    test('should render RoomListed', () => {
        const wrapper = shallow(<RoomListed />);
        expect(wrapper.length).toEqual(1);
    })
})