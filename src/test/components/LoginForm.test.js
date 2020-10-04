import { shallow } from 'enzyme'
import React from 'react'

import '@testing-library/jest-dom'
import { LoginForm } from '../../components/LoginForm'


describe('<LoginForm/>', () => {

    const preventDefault = jest.fn()

    const wrapper = shallow(<LoginForm/>)
    test('should render LoginForm', () => {
        const wrapper = shallow(<LoginForm />);
        expect(wrapper.length).toEqual(1);
    })
    
    test('Simulate submit in <LoginForm/> ', () => {
        wrapper.find('form').simulate('submit', { preventDefault})
        expect(preventDefault).toHaveBeenCalledTimes(1)
        wrapper.unmount()
    })

    test('snapshot to <LoginForm/>', () => {
        const wrapper = shallow(<LoginForm/>)

        expect(wrapper).toMatchSnapshot()
        
    })

    
    
    
})
