import React from 'react';
import { shallow  } from 'enzyme';
import { RegisterForm } from '../../components/RegisterForm';
import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;


describe('RegisterForm testing', () => {
    test('should render RegisterForm', () => {
        const wrapper = shallow(<RegisterForm />);
        expect(wrapper.length).toEqual(1);
    })
})