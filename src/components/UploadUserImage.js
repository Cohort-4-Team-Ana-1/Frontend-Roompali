import React, { useState } from "react";
import { useForm } from "react-hook-form";
import default_profile_image from "../assets/default_profile_image.svg";

import axios from "axios";

export const UploadUserImage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.picture[0]);

    axios({
      url: "/images",
      method: "POST",
      data: formData,
    })
      .then((response) => {
        alert("Imagen de perfil guardada");

        localStorage.setItem("user_picture", response.data.image_url);
        response.data.success === false &&
          alert(
            "Asegurate de que tu archivo sea una imagen con extension .JPG o PNG"
          );
      })
      .catch((err) => {
        // console.error(err);
      });
  };

  const [profileImage, setprofileImage] = useState({
    profileImg: default_profile_image,
  });

  const { profileImg } = profileImage;

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      reader.readyState === 2 && setprofileImage({ profileImg: reader.result });
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <section className="upload__form">
      <form className="upload__singleImage" onSubmit={handleSubmit(onSubmit)}>
        <input
          ref={register}
          type="file"
          name="picture"
          onChange={imageHandler}
          required="required"
          accept="image/*"
          id="user_photo"
        />
        <label htmlFor="user_photo">
          {" "}
          <img
            src={profileImg}
            accept="image/*"
            style={{ width: "200px", height: "200px" }}
            alt="default user image"
            className="choose_image"
          />
        </label>

        <button>Guardar</button>
      </form>
    </section>
  );
};
