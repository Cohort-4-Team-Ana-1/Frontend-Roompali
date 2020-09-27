import React from "react";
import { Link } from "react-router-dom";
//ícono de favoritos de Material Design
import { MdFavoriteBorder } from "react-icons/md";
//ícono de LogIn de CG
import { CgLogIn } from "react-icons/cg";
import "../styles/components/NavBar.scss";

export const NavBar = () => {
  return (
    <div className="navbar menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <CgLogIn />
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <MdFavoriteBorder />
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
