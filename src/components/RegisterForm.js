import React, { useEffect } from "react";
import { useForm } from "../hooks/useForm";
import axios from "axios";

export const RegisterForm = () => {
  const [formValues, handleInputChange] = useForm({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formValues;

  useEffect(() => {
    console.log("email cambió");
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: `${username}`,
      email: `${email}`,
      password: `${password}`,
    };
    axios({
      url: "/users",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    })
      .then((response) => {
        const datos = response.data;
        console.log(datos);
        alert(
          "Gracias por registrarte en Roompali, inicia sesion para mejorar tu experiencia"
        );

        window.location.reload(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <div className="modal-body">
          <h1>Roompali</h1>
        <form onSubmit={handleSubmit}>
          
          <div className="form-group">

            <label>
              Nombre de usuario
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="nombre"
              autoComplete="off"
              value={username}
              onChange={handleInputChange}
            />
            </label>
         
         <label >Correo electrónico

            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="email@gmail.com"
              autoComplete="off"
              value={email}
              onChange={handleInputChange}
            />
         </label>
          
            <label>Contraseña
         
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="*****"
              value={password}
              onChange={handleInputChange}
            /></label>
          <button type="submit">
            Registrarme
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};
