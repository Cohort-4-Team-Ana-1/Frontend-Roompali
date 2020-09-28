import React, { useEffect } from "react";
import { useForm } from "../hooks/useForm";
import axios from "axios";

export const LoginForm = () => {
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  useEffect(() => {
    console.log("email cambió");
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: `${email}`,
      password: `${password}`,
    };
    axios({
      url: "/users/sign-in",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    })
      .then((response) => {
        const datos = response.data;
        sessionStorage.setItem("token", datos.token);
        sessionStorage.setItem("user-id", datos.payload._id);
        sessionStorage.setItem("username", datos.payload.user);
        console.log(datos.payload._id);
        console.log(datos);
        alert(
          `Hola ${sessionStorage.getItem(
            "username"
          )}, disfruta tu tiempo en Roompali!`
        );
        // window.location.reload(false);
        window.location.href="/create-host-rol";
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <div className="modal-body">
        <h1>FORMULARIO DE INICIO DE SESION </h1>
        <form action="/" onSubmit={handleSubmit}>
          <hr />
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="email@gmail.com"
              autoComplete="off"
              value={email}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="*****"
              value={password}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            ENTRAR
          </button>
        </form>
      </div>
    </div>
  );
};
