import React from 'react';
import { shallow  } from 'enzyme';
import { UploadMultiImages } from '../../components/UploadMultiImages';
import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;


describe('UploadMultiImages testing', () => {
    test('should render UploadMultiImages', () => {
        const wrapper = shallow(<UploadMultiImages />);
        expect(wrapper.length).toEqual(1);
    })
})