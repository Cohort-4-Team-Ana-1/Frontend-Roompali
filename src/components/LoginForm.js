import React, { useEffect } from "react";
import { useForm } from "../hooks/useForm";
import axios from "axios";
import { IoIosArrowDropleft } from "react-icons/io";

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
        window.location.href = "/choose-user-rol";
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <div className="modal-body">
        <h1>Roompali</h1>
        <form action="/" onSubmit={handleSubmit}>

          <h1>Inicia Sesion</h1>
          <div className="form-group">
            <label>
              Correo electronico
              <input
                type="email"
                name="email"
                placeholder="email@gmail.com"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
              />{" "}
            </label>

            <label>
              Contraseña
              <input
                type="password"
                name="password"
                placeholder="*****"
                value={password}
                onChange={handleInputChange}
              />
            </label>
          <button type = "submit">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};
