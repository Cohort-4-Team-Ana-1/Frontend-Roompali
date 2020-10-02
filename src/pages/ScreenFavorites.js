import React, { useState } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import Modal from "react-modal";
import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from "../components/RegisterForm";

export const ScreenFavorites = () => {
  const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false);
  const [modalRegisterIsOpen, setModalRegisterIsOpen] = useState(false);
  const username = sessionStorage.getItem("username");
  return (
    <>
      {username ? (
        <h1>Favorites Screen</h1>
      ) : (
        <>
          <section className = "select__choice">
          <h1>Tus favoritos</h1> 
            <div className = "select__options">
              <p>Para poder ver esta seccion debes tener una cuenta registrada</p>
              <div className="select__item">

              <p>Si aun no tienes cuenta presiona aqui</p>
              <button onClick={() => setModalRegisterIsOpen(true)}>
                Registrarme
              </button>

              <Modal
              className="Modal"
              overlayClassName="Overlay"
                isOpen={modalRegisterIsOpen}
                onRequestClose={() => setModalRegisterIsOpen(false)}
              >
                <RegisterForm />
                <button className = "exit__button" onClick={() => setModalRegisterIsOpen(false)}><IoIosArrowDropleft size = {"1.5em"} /></button>
              </Modal>
                
              </div>
              <div className = "select__item">


              <p> Si ya tienes cuenta presiona aqui</p>

              <button onClick={() => setModalLoginIsOpen(true)}>Iniciar sesion</button>

              <Modal
              className="Modal"
              overlayClassName="Overlay"
                isOpen={modalLoginIsOpen}
                onRequestClose={() => setModalLoginIsOpen(false)}
              >
                <LoginForm />

                <button className = "exit__button" onClick={() => setModalLoginIsOpen(false)}><IoIosArrowDropleft size = {"1.5em"} /></button>
              </Modal>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};
