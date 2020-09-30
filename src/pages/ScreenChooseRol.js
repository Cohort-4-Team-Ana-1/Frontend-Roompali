import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const ScreenChooseRol = () => {
  const user_id = `${sessionStorage.getItem("user-id")}`;

  const handleClick = () => {
    axios({
      url: `/roles`,
      method: "GET",
    })
      .then((response) => {
        const data = response.data.body;
        console.log(data);

        const found = data.find((e) => user_id === e.user_data);

        !found
          ? (window.location.href = "/create-host-rol")
          : found.owner === true
          ? (window.location.href = "/create-room/step-1")
          : (window.location.href = "/create-host-rol");
      })
      .catch((err) => {
        console.error(err);
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Screen Rol Page</h1>
      <p>Bienvenido a Rompali, que deseas hacer hoy?</p>
      <button>
        <Link to="/"> Buscar una habitacion</Link>
      </button>
      <button onClick={handleClick}>Publicar una habitacion</button>
    </div>
  );
};
