import React from "react";
import { UploadMainImages } from "../components/UploadMainImages";
import { UploadMultiImages } from "../components/UploadMultiImages";

export const ScreenCreateRoom = () => {
  return (
    <>
      <UploadMainImages />
      <hr />
      <UploadMultiImages />
    </>
  );
};
