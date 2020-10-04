import React from 'react';
import { shallow  } from 'enzyme';
import { UploadUserImage } from '../../components/UploadUserImage';
import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;


describe('UploadUserImage testing', () => {
    test('should render UploadUserImage', () => {
        const wrapper = shallow(<UploadUserImage />);
        expect(wrapper.length).toEqual(1);
    })
})