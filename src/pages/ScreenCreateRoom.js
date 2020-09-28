import React from "react";
import { FormCreateRoom } from "../components/FormCreateRoom";
import { UploadMainImages } from "../components/UploadMainImages";
import { UploadMultiImages } from "../components/UploadMultiImages";

export const ScreenCreateRoom = () => {
  return (
    <>
      <UploadMainImages />
      <hr />
      <UploadMultiImages />
      <hr/>
      <FormCreateRoom />
    </>
  );
};
