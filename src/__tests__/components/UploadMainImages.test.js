import React from 'react';
import { shallow  } from 'enzyme';
import { UploadMainImages } from '../../components/UploadMainImages';
import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;


describe('UploadMainImages testing', () => {
    test('should render UploadMainImages', () => {
        const wrapper = shallow(<UploadMainImages />);
        expect(wrapper.length).toEqual(1);
    })
})