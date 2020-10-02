import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

import { FaRegUserCircle } from "react-icons/fa";
import { RiLoginBoxLine, RiHomeHeartFill, RiMapPinUserFill, RiLogoutBoxRLine } from "react-icons/ri";
import {IoIosArrowDropleft} from 'react-icons/io'

export const NavBar = () => {
  const username = sessionStorage.getItem("username");
  const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false);
  const [modalRegisterIsOpen, setModalRegisterIsOpen] = useState(false);

  return (
    <>
      {username ? (
        <nav>
          <Link to="/">
            <h2>LOGO</h2>
          </Link>


          <div className = "navBar__item">

          <RiMapPinUserFill size={"1.8em"}/>
          <p>{username}</p>
          </div>



          <Link className = "navBar__item" to="/favorites" className = "navBar__item">
            <RiHomeHeartFill size={"1.8em"} />
            <p>Favoritos</p>
          </Link>
          


          <Link className = "navBar__item" to="/"
            onClick={() => {
              sessionStorage.clear();
              localStorage.clear();

              window.location.href = "/";
            }}
          ><RiLogoutBoxRLine size={"1.7em"} />
            <p>Cerrar sesión</p>
          </Link>
        </nav>


      ) : (
        <nav>
          <Link to="/">
            <h2>LOGO</h2>
          </Link>

          
          <div className = "navBar__item">
            <RiLoginBoxLine
              onClick={() => setModalLoginIsOpen(true)}
              size={"1.8em"}
            />
            <p onClick={() => setModalLoginIsOpen(true)}>Login</p>
            <Modal
              isOpen={modalLoginIsOpen}
              onRequestClose={() => setModalLoginIsOpen(false)}
              className="Modal"
              overlayClassName="Overlay"
            >
              <LoginForm />
              {/* <p onClick={() => setModalRegisterIsOpen(false)}> </p> */}
              
              <button className = "exit__button" onClick={() => setModalLoginIsOpen(false)}><IoIosArrowDropleft size = {"1.5em"} /></button>
            </Modal>
          </div>


          <div className = "navBar__item">
            <FaRegUserCircle
              size={"1.8em"}
              onClick={() => setModalRegisterIsOpen(true)}
            />

            <p onClick={() => setModalRegisterIsOpen(true)}>Crear cuenta</p>
            <Modal
              isOpen={modalRegisterIsOpen}
              onRequestClose={() => setModalRegisterIsOpen(false)}
              className="Modal"
              overlayClassName="Overlay"
            >
              <RegisterForm />
              <button className = "exit__button" onClick={() => setModalRegisterIsOpen(false)}><IoIosArrowDropleft size = {"1.5em"} /></button>
            </Modal>
          </div>

          

          <Link to="/favorites" className = "navBar__item">
            <RiHomeHeartFill size={"1.8em"} />
            <p>Favoritos</p>
          </Link>
        </nav>
      )}
    </>
  );
};
