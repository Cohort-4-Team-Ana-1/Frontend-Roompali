import { shallow } from "enzyme";
import React from "react";

import "@testing-library/jest-dom";
import "mutationobserver-shim";
import { UploadUserImage } from "../../components/UploadUserImage";
global.MutationObserver = window.MutationObserver;

describe("<UploadMainImages/>", () => {
  const preventDefault = jest.fn();

  const wrapper = shallow(<UploadUserImage />);

  test('should render UploadUserImage', () => {
    const wrapper = shallow(<UploadUserImage />);
    expect(wrapper.length).toEqual(1);
})

  test("should submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });

  test("snapshot to <UploadUserImage/>", () => {
    const wrapper = shallow(<UploadUserImage />);

    expect(wrapper).toMatchSnapshot();
  });
});
