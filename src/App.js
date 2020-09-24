import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Modal from "react-modal";
import { ModalRegister } from "./components/ModalRegister";
import { ModalLogin } from "./components/ModalLogin";
import { AppRouter } from "./AppRouter";

Modal.setAppElement("#root");
export const App = () => {
  const [modalRegisterIsOpen, setModalRegisterIsOpen] = useState(false);
  const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false);

  return (
    <React.Fragment>
      <AppRouter />
      <h1>Frontend Roompali</h1>
      <ModalLogin></ModalLogin>
      <ModalRegister></ModalRegister>
    </React.Fragment>
  );
};
