import React, { useState } from "react";
import Modal from "react-modal";
import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from "../components/RegisterForm";

export const ScreenFavorites = () => {
  const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false);
  const [modalRegisterIsOpen, setModalRegisterIsOpen] = useState(false);
  const username = sessionStorage.getItem("username");
  return (
    <div>
      {username ? (
        <h1>Favorites Screen</h1>
      ) : (
        <>
          <h1>No tienes los permisos suficientes para ver esta pagina </h1>
          <p>
            Si aun no tienes cuenta haz click{" "}
            <span onClick={() => setModalRegisterIsOpen(true)}>AQUII!</span>
          </p>
          {/* <p onClick={() => setModalRegisterIsOpen(true)}>Register</p> */}
          <Modal
            isOpen={modalRegisterIsOpen}
            onRequestClose={() => setModalRegisterIsOpen(false)}
          >
            <RegisterForm />
            <button onClick={() => setModalRegisterIsOpen(false)}>Exit</button>
          </Modal>

          <p>
            Si ya tienes cuenta Inicia Sesion{" "}
            <span onClick={() => setModalLoginIsOpen(true)}>AQUIII</span>
          </p>

          {/* <span onClick={() => setModalLoginIsOpen(true)}>Login</span> */}
          <Modal
            isOpen={modalLoginIsOpen}
            onRequestClose={() => setModalLoginIsOpen(false)}
          >
            <LoginForm />

            <button onClick={() => setModalLoginIsOpen(false)}>Exit</button>
          </Modal>
        </>
      )}
    </div>
  );
};
