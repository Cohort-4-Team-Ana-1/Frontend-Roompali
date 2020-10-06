import { shallow } from 'enzyme'
import React from 'react'

import '@testing-library/jest-dom'
import { RegisterForm } from '../../components/RegisterForm'



describe('<LoginForm/>', () => {

    const preventDefault = jest.fn()

    const wrapper = shallow(<RegisterForm/>)

    test('should render RegisterForm', () => {
        const wrapper = shallow(<RegisterForm />);
        expect(wrapper.length).toEqual(1);
    })
    
    test('should ', () => {
        wrapper.find('form').simulate('submit', { preventDefault})
        expect(preventDefault).toHaveBeenCalledTimes(1)
        wrapper.unmount()
    })

    test('snapshot to <LoginForm/>', () => {
        const wrapper = shallow(<RegisterForm/>)

        expect(wrapper).toMatchSnapshot()
        
    })
    
    
})
