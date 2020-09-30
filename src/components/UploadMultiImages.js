import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export const UploadMultiImages = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    const toArray = Object.values(data.picture);
    console.log(toArray);
    // localStorage.setItem('secondary_images', toArray)
    toArray.map((item) => {
      // console.log(item); 
      formData.append("image", item);
    });
    axios({
      url: "images/multi",
      method: "POST",
      data: formData,
    })
      .then((response) => {
        // response.json();
        alert("Imagenes del cuarto subidas");
        console.log(response);
        // const images_urls = JSON.stringify(response.data.images_urls)
        console.log(response.data.images_urls)

        const secondary_images = []

        localStorage.setItem("secondary_images", JSON.stringify(response.data.images_urls));




        response.data.success === false &&
          alert(
            "Asegurate de que tu archivo sea una imagen con extension .JPG o PNG"
          );
        window.location.href = "/create-room/step-3";
      })
      .catch((err) => {
        console.error(err);
        console.log(err);
      });
  };

  return (
    <>
      <h1> CAPTURA DE IMAGENES MULTIPLES </h1>
      <p>
        Escoge varias imagenes para que la gente conozca tu cuarto a detalle
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          ref={register}
          type="file"
          name="picture"
          multiple
          required="required"
        />
        <img
          accept="image/*"
          src="https://images.igdb.com/igdb/image/upload/t_cover_big/co254s.jpg"
          accept="image/*"
          style={{ width: `100px` }}
          alt=""
        />
        <button>Submit</button>
      </form>
    </>
  );
};