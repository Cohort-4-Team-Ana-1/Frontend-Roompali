import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const NavBar = () => {
  const username = sessionStorage.getItem("username");
  const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false);
  const [modalRegisterIsOpen, setModalRegisterIsOpen] = useState(false);

  return (
    <>
      {username ? (
        <ul>
          <Link to="/">Home</Link>
          <h3>{username}</h3>
          <Link to="/favorites">Favorites</Link>
          <span>---</span>
          <Link
            to="/"
            onClick={() => {
              sessionStorage.clear();
              localStorage.clear();

              window.location.href = "/";
            }}
          >
            Logout
          </Link>
        </ul>
      ) : (
        <ul>
          <Link to="/">Home</Link>

          <p onClick={() => setModalRegisterIsOpen(true)}>Register</p>
          <Modal
            isOpen={modalRegisterIsOpen}
            onRequestClose={() => setModalRegisterIsOpen(false)}
          >
            <RegisterForm />
            <button onClick={() => setModalRegisterIsOpen(false)}>Exit</button>
          </Modal>

          <p onClick={() => setModalLoginIsOpen(true)}>Login</p>
          <Modal
            isOpen={modalLoginIsOpen}
            onRequestClose={() => setModalLoginIsOpen(false)}
          >
            <LoginForm />

            <button onClick={() => setModalLoginIsOpen(false)}>Exit</button>
          </Modal>

          <Link to="/favorites">Favorites</Link>
        </ul>
      )}
    </>
  );
};
