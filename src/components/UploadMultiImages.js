import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import default_multiple_pictures from "../assets/default_multiple_pictures.svg";

export const UploadMultiImages = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    const toArray = Object.values(data.picture);
    toArray.map((item) => {
      formData.append("image", item);
    });
    axios({
      url: "images/multi",
      method: "POST",
      data: formData,
    })
      .then((response) => {
        alert("Imagenes del cuarto subidas");

        localStorage.setItem(
          "secondary_images",
          JSON.stringify(response.data.images_urls)
        );

        response.data.success === false &&
          alert(
            "Asegurate de que tu archivo sea una imagen con extension .JPG o PNG"
          );
        window.location.href = "/create-room/step-3";
      })
      .catch((err) => {
        // console.error(err);
      });
  };

  const [profileImage, setprofileImage] = useState({
    profileImg: default_multiple_pictures,
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
      <p>
        Escoge varias imagenes para que la gente conozca tu cuarto a detalle
      </p>
      <form className="upload__singleImage" onSubmit={handleSubmit(onSubmit)}>
        <input
          ref={register}
          type="file"
          name="picture"
          multiple
          onChange={imageHandler}
          required="required"
          id="multipleImageRoom"
        />
        <label htmlFor="multipleImageRoom">
          <img
            accept="image/*"
            src={profileImg}
            accept="image/*"
            style={{ width: "200px", height: "200px" }}
            alt="default image"
            className="choose_image"
          />
        </label>
        <button>Submit</button>
      </form>
    </section>
  );
};
