import { shallow } from 'enzyme'
import React from 'react'

import '@testing-library/jest-dom'
import { UploadMainImages } from '../../components/UploadMainImages'
import 'mutationobserver-shim';

global.MutationObserver = window.MutationObserver;


describe('<UploadMainImages/>', () => {
  

    const preventDefault = jest.fn()

    const wrapper = shallow(<UploadMainImages/>)

    test('should render UploadMainImages', () => {
        const wrapper = shallow(<UploadMainImages />);
        expect(wrapper.length).toEqual(1);
    })

    test('should submit ', () => {
        wrapper.find('form').simulate('submit', { preventDefault})
        expect(preventDefault).toHaveBeenCalledTimes(1)
        wrapper.unmount()
    })

    test('snapshot to <UploadMainImages/>', () => {
        const wrapper = shallow(<UploadMainImages/>)

        expect(wrapper).toMatchSnapshot()
        
    })
    
    
})
