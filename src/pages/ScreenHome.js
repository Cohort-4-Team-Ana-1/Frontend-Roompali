import React from "react";
import { Link } from "react-router-dom";

export const ScreenHome = () => {
  return (
    <div>
      <h1>Home Screen</h1>

      <h4>
        Pagina de detalles de cuarto ---{" "}
        <Link to="/room-details">Room Details</Link>{" "}
      </h4>
      <h4>
        Pagina para creacion de cuarto ---{" "}
        <Link to="/create-room">Create Room</Link>{" "}
      </h4>
    </div>
  );
};
