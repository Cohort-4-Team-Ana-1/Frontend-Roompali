import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export const FormCreateRoom = () => {
  const main_image = localStorage.getItem("main_image");
  const secondary_images = localStorage.getItem("secondary_images");
  const userId = sessionStorage.getItem("user-id");

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);

    const newData = { ...data, main_image, secondary_images, userId };
    console.log(JSON.stringify(newData));

    axios({
      url: "/rooms",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: newData,
    })
      .then((response) => {
        console.log(response);
        alert("Cuarto creado, te redirigimos para que puedas verlo");
        window.location.href = "/";
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      {localStorage.getItem("secondary_images") &&
        localStorage.getItem("main_image") && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              Ciudad:
              <select name="city" ref={register({ required: true })}>
                <option value="Medellin">Medellin</option>
                <option value=" Bogota"> Bogota</option>
                <option value=" Cali"> Cali</option>
                <option value=" Barranquilla"> Barranquilla</option>
              </select>
              <br />
            </label>

            <label>
              titulo de la publicacion
              <input
                type="text"
                required="required"
                placeholder="room_name"
                name="room_name"
                ref={register({ required: true, min: 3 })}
              />
              <br />
            </label>

            <label>
              Habitacion esta disponible:{" "}
              <input
                type="checkbox"
                placeholder="available"
                name="available"
                ref={register}
                defaultChecked
              />
            </label>
            <br />

            <label>
              Precio del alquiler COP{" "}
              <input
                type="number"
                placeholder="price"
                name="price"
                required="required"
                ref={register}
              />
            </label>
            <br />
            <label>
              Dirección{" "}
              <input
                type="text"
                placeholder="address"
                name="address"
                ref={register}
              />
            </label>
            <br />
            <label>
              Área del cuarto (mts2){" "}
              <input
                type="number"
                placeholder="square_meters"
                required="required"
                name="square_meters"
                ref={register}
              />
            </label>
            <br />
            <label>
              Cama{" "}
              <input
                type="checkbox"
                placeholder="bed"
                name="bed"
                ref={register}
              />
            </label>
            <br />
            <label>
              Escritorio{" "}
              <input
                type="checkbox"
                placeholder="desk"
                name="desk"
                ref={register}
              />
            </label>
            <br />
            <label>
              Armario{" "}
              <input
                type="checkbox"
                placeholder="closet"
                name="closet"
                ref={register}
              />
            </label>
            <br />
            <label>
              Silla{" "}
              <input
                type="checkbox"
                placeholder="chair"
                name="chair"
                ref={register}
              />
            </label>
            <br />
            <label>
              Sofá{" "}
              <input
                type="checkbox"
                placeholder="couch"
                name="couch"
                ref={register}
              />
            </label>
            <br />
            <label>
              Cocina{" "}
              <input
                type="checkbox"
                placeholder="kitchen"
                name="kitchen"
                ref={register}
              />
            </label>
            <br />
            <label>
              Visitas{" "}
              <input
                type="checkbox"
                placeholder="visits"
                name="visits"
                ref={register}
              />
            </label>
            <br />
            <label>
              Internet{" "}
              <input
                type="checkbox"
                placeholder="wifi"
                name="wifi"
                ref={register}
              />
            </label>
            <br />
            <label>
              Parqueadero{" "}
              <input
                type="checkbox"
                placeholder="parking"
                name="parking"
                ref={register}
              />
            </label>
            <br />
            <label>
              Lavadora{" "}
              <input
                type="checkbox"
                placeholder="washing_machine"
                name="washing_machine"
                ref={register}
              />
            </label>
            <br />
            <label>
              Televisión{" "}
              <input
                type="checkbox"
                placeholder="television"
                name="television"
                ref={register}
              />
            </label>
            <br />
            <label>
              Calefacción{" "}
              <input
                type="checkbox"
                placeholder="heating"
                name="heating"
                ref={register}
              />
            </label>
            <br />
            <label>
              Baño privado{" "}
              <input
                type="checkbox"
                placeholder="private_bathroom"
                name="private_bathroom"
                ref={register}
              />
            </label>
            <br />
            <label>
              Gimnasio{" "}
              <input
                type="checkbox"
                placeholder="gymnasium"
                name="gymnasium"
                ref={register}
              />
            </label>
            <br />
            <label>
              Aire acondicionado{" "}
              <input
                type="checkbox"
                placeholder="air_conditioner"
                name="air_conditioner"
                ref={register}
              />
            </label>
            <br />
            <label>
              Descripción del cuarto{" "}
              <textarea name="room_description" ref={register} />
            </label>
            <br />

            <input type="submit" />
          </form>
        )}
    </>
  );
};
