

import { shallow } from 'enzyme'
import React from 'react'
import { NavBar } from '../../components/NavBar'
import '@testing-library/jest-dom'


describe('test in <Navbar/>', () => {

    test('should render NavBar', () => {
        const wrapper = shallow(<NavBar />);
        expect(wrapper.length).toEqual(1);
    })

    test('snapshot to <NavBar/>', () => {
        const wrapper = shallow(<NavBar/>)

        expect(wrapper).toMatchSnapshot()
        
    })
    test('NavBar logo image', () => {
        expect(wrapper.find('img')).toHaveLength(1)
    })
    
    
    
})
