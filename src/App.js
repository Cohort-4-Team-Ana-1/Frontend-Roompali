import React, { useState } from "react";
import Modal from "react-modal";
import { ModalRegister } from "./components/ModalRegister";
import { ModalLogin } from "./components/ModalLogin";

Modal.setAppElement("#root");
export const App = () => {
  const [modalRegisterIsOpen, setModalRegisterIsOpen] = useState(false);
  const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false);

  return (
    <div>
      <h1>Frontend Roompali</h1>
      <ModalLogin></ModalLogin>
      <ModalRegister></ModalRegister>
    </div>
  );
};
