

import { shallow } from 'enzyme'
import React from 'react'
import { NavBar } from '../../components/NavBar'
import '@testing-library/jest-dom'

import Modal from 'react-modal';



describe('test in <Navbar/>', () => {



   


    const wrapper = shallow(<NavBar/>)

    test('should render NavBar', () => {
        const wrapper = shallow(
                <NavBar />
                );
        expect(wrapper.length).toEqual(1);
    })

    test('show <NavBar/>', () => {
    })
    
    test('snapshot to <NavBar/>', () => {
        const wrapper = shallow(<NavBar/>)

        expect(wrapper).toMatchSnapshot()
        
    })
    test('NavBar logo image', () => {
        expect(wrapper.find('img')).toHaveLength(1)
    })
    
    test('renders react-modal', () => {
        const wrapper = shallow(<NavBar />);
        expect(wrapper.find(Modal)).toHaveLength(2);
      });
      
   
    
})
