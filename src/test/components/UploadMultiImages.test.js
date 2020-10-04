import { shallow } from "enzyme";
import React from "react";

import "@testing-library/jest-dom";
import "mutationobserver-shim";
import { UploadMultiImages } from "../../components/UploadMultiImages";
global.MutationObserver = window.MutationObserver;

describe("<UploadMultiImages/>", () => {
  const preventDefault = jest.fn();

  const wrapper = shallow(<UploadMultiImages />);
  test('should render UploadMultiImages', () => {
    const wrapper = shallow(<UploadMultiImages />);
    expect(wrapper.length).toEqual(1);
})

  test("should submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });

  test("snapshot to <UploadMultiImages/>", () => {
    const wrapper = shallow(<UploadMultiImages />);

    expect(wrapper).toMatchSnapshot();
  });
});
