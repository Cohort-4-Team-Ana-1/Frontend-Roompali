import React from 'react';
import { shallow  } from 'enzyme';
import { FavoritesList } from '../../components/FavoritesList';
import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;


describe('FavoritesList testing', () => {
    test('should render FavoritesList', () => {
        const wrapper = shallow(<FavoritesList />);
        expect(wrapper.length).toEqual(1);
    })
})