import React from 'react';
import { shallow  } from 'enzyme';
import { LoginForm } from '../../components/LoginForm';
import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;


describe('LoginForm testing', () => {
    test('should render LoginForm', () => {
        const wrapper = shallow(<LoginForm />);
        expect(wrapper.length).toEqual(1);
    })
})