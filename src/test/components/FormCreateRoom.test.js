import React from 'react';
import { shallow  } from 'enzyme';
import { FormCreateRoom } from '../../components/FormCreateRoom';
import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;


describe('FormCreateRoom testing', () => {
    test('should render FormCreateRoom', () => {
        const wrapper = shallow(<FormCreateRoom />);
        expect(wrapper.length).toEqual(1);
    })
})