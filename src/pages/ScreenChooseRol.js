import React from "react";
import { Link } from "react-router-dom";

export const ScreenChooseRol = () => {
  return (
    <div>
      <h1>Screen Rol Page</h1>
      <p>Bienvenido a Rompali, que deseas hacer hoy?</p>
      <button>
        <Link to="/"> Buscar una habitacion</Link>
      </button>
      <button>
        <Link to="/create-room/step-1"> Publicar una habitacion</Link>
      </button>
    </div>
  );
};
