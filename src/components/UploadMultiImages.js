import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const UploadMultiImages = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    const toArray = Object.values(data.picture);
    console.log(toArray);
    toArray.map((item) => {
      console.log(item);
      formData.append("image", item);
    });

    const res = await fetch(
      "https://backend-roompali.vercel.app/api/images/multi",
      {
        method: "POST",
        body: formData,
      }
    ).then((res) => res.json());
    console.log(res);
    res.success === false &&
      alert(
        "Asegurate de que tus archivos sean imagenes con extension .JPG o PNG"
      );
  };

  const [profileImage, setprofileImage] = useState({
    profileImg:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co254s.jpg",
  });

  const { profileImg } = profileImage;

  return (
    <>
      <h1> CAPTURA DE IMAGENES MULTIPLES </h1>
      <p>
        Escoge varias imagenes para que la gente conozca tu cuarto a detalle
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input ref={register} type="file" name="picture" multiple />
        <img
          src={profileImg}
          accept="image/*"
          style={{ width: `100px` }}
          alt=""
        />
        <button>Submit</button>
      </form>
    </>
  );
};
