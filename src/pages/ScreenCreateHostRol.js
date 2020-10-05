import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { UploadUserImage } from "../components/UploadUserImage";

export const ScreenCreateHostRol = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    !localStorage.getItem("user_picture") &&
      alert("Debes guardar la foto antes de continuar");
    const user_picture = localStorage.getItem("user_picture");
    const user_data = sessionStorage.getItem("user-id");
    const newData = { ...data, user_picture, user_data };
    axios({
      url: "/roles",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: newData,
    })
      .then((response) => {
        window.location.href = "/create-room/step-1";
      })
      .catch((err) => {
        // console.error(err);
      });
  };

  return (
    <>
      <h1>Creando tu perfil de anfitrión</h1>
      <section className="upload__form">
        <UploadUserImage />
        <form className="upload__userInfo" onSubmit={handleSubmit(onSubmit)}>
          <br />
          <input
            type="text"
            placeholder="Nombre"
            name="first_name"
            required="required"
            ref={register({ min: 3 })}
          />
          <br />
          <input
            type="text"
            placeholder="Apellidos"
            name="last_name"
            required="required"
            ref={register({ min: 3 })}
          />
          <br />
          <input
            type="email"
            placeholder="Correo electrónico"
            name="contact_email"
            required="required"
            ref={register}
          />
          <br />

          <input
            type="number"
            placeholder="Whatsapp"
            name="whatsapp"
            required="required"
            ref={register({ min: 100000000 })}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
};
