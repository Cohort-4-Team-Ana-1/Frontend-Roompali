import { mount, shallow } from "enzyme";
import React from "react";
import axios from 'axios';

import "@testing-library/jest-dom";
import "mutationobserver-shim";
import { UploadUserImage } from "../../components/UploadUserImage";
import { queryByTestId } from "@testing-library/react";


jest.mock('axios', () => {
  return {
    post: jest.fn()
  };
});

global.MutationObserver = window.MutationObserver;

describe("<UploadMainImages/>", () => {

  test('should render UploadUserImage', () => {
    const wrapper = shallow(<UploadUserImage />);
    expect(wrapper.length).toEqual(1);
})

 // test("should submit", () => {
  //   wrapper.find("form").simulate("submit", { preventDefault });
  //   expect(preventDefault).toHaveBeenCalledTimes(1);
  //   wrapper.unmount();
  // });

  test("snapshot to <UploadUserImage/>", () => {
    const wrapper = shallow(<UploadUserImage />);

    expect(wrapper).toMatchSnapshot();
  });
 
});
